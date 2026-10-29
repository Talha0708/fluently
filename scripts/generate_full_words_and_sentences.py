# scripts/generate_full_words_and_sentences.py
import re
import os
import json

print("Starting generation of 3000+ words and 1000+ sentences...")

# Read original
with open("public/assets/aistudio/fluently_step3_37e05570.tsx", "r", encoding="utf-8") as f:
    orig = f.read()

seen_words = set()
words_list = []

# 1. Base Words
base_match = re.search(r'const BASE_DICTIONARY = (\[[\s\S]*?\]);', orig)
if base_match:
    items = re.findall(r"\{\s*id:\s*\d+,\s*word:\s*'([^']*)',\s*bn:\s*'([^']*)',\s*phonetic:\s*'([^']*)',\s*pos:\s*'([^']*)',\s*category:\s*'([^']*)'\s*\}", base_match.group(1))
    for word, bn, phonetic, pos, cat in items:
        w_low = word.strip().lower()
        if w_low not in seen_words:
            seen_words.add(w_low)
            words_list.append({
                "word": word.strip(),
                "bn": bn.strip(),
                "phonetic": phonetic.strip(),
                "pos": pos.strip(),
                "category": cat.strip(),
                "level": "A1"
            })

# 2. WORD_BANK_RAW
raw_dict_match = re.search(r'const WORD_BANK_RAW = \{([\s\S]*?)\};', orig)
if raw_dict_match:
    lines = raw_dict_match.group(1).split("\n")
    for line in lines:
        m = re.match(r"\s*([A-Za-z0-9_]+):\s*'([^']*)'", line)
        if m:
            cat_key, content = m.group(1), m.group(2)
            cat = cat_key.split("_")[0]
            for entry in content.split("|"):
                if "=" in entry:
                    w, bn = entry.split("=", 1)
                    w = w.strip()
                    bn = bn.strip()
                    w_low = w.lower()
                    if w and bn and w_low not in seen_words:
                        seen_words.add(w_low)
                        pos = "noun"
                        lvl = "A2"
                        if cat in ["Actions", "Verbs"]:
                            pos = "verb"
                        elif cat in ["Adjectives", "Feelings"]:
                            pos = "adjective"
                        elif cat in ["Phrasal"]:
                            pos = "phrasal verb"
                            lvl = "B1"
                        elif cat in ["Idioms"]:
                            pos = "idiom"
                            lvl = "B2"
                        elif cat in ["Grammar"]:
                            pos = "grammar"
                        elif cat in ["Phrases"]:
                            pos = "phrase"
                        words_list.append({
                            "word": w,
                            "bn": bn,
                            "phonetic": "",
                            "pos": pos,
                            "category": cat,
                            "level": lvl
                        })

print(f"Base + raw count: {len(words_list)}")

# Import rich datasets from dictionary expansions
with open("scripts/rich_words_data.json", "r", encoding="utf-8") as f:
    rich_words = json.load(f)

for item in rich_words:
    w_low = item["word"].strip().lower()
    if w_low not in seen_words:
        seen_words.add(w_low)
        words_list.append(item)

print(f"Total Words after expansion: {len(words_list)}")

# Process Sentences
seen_sents = set()
sentences_list = []

sent_raw_match = re.search(r'const SENTENCE_RAW = `([\s\S]*?)`;', orig)
if sent_raw_match:
    for line in sent_raw_match.group(1).strip().split("\n"):
        parts = line.strip().split("|")
        if len(parts) == 3:
            cat, en, bn = parts[0].strip(), parts[1].strip(), parts[2].strip()
            en_low = en.lower()
            if en_low not in seen_sents:
                seen_sents.add(en_low)
                sentences_list.append({
                    "category": cat,
                    "en": en,
                    "bn": bn,
                    "level": "A1"
                })

print(f"Original sentences: {len(sentences_list)}")

with open("scripts/rich_sentences_data.json", "r", encoding="utf-8") as f:
    rich_sents = json.load(f)

for item in rich_sents:
    en_low = item["en"].strip().lower()
    if en_low not in seen_sents:
        seen_sents.add(en_low)
        sentences_list.append(item)

print(f"Total Sentences after expansion: {len(sentences_list)}")

# Assign IDs
for idx, w in enumerate(words_list, 1):
    w["id"] = idx

for idx, s in enumerate(sentences_list, 1):
    s["id"] = idx

os.makedirs("src/data", exist_ok=True)

# Write wordsData.ts
with open("src/data/wordsData.ts", "w", encoding="utf-8") as f:
    f.write("""export interface WordItem {
  id: number;
  word: string;
  bn: string;
  phonetic?: string;
  pos: string;
  category: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
}

export const ALL_WORDS_DATABASE: WordItem[] = """)
    json.dump(words_list, f, ensure_ascii=False, indent=2)
    f.write(";\n\nexport const ALL_CATEGORIES = Array.from(new Set(ALL_WORDS_DATABASE.map(w => w.category)));\n")

# Write sentencesData.ts
with open("src/data/sentencesData.ts", "w", encoding="utf-8") as f:
    f.write("""export interface SentenceItem {
  id: number;
  category: string;
  en: string;
  bn: string;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
}

export const SENTENCE_BANK: SentenceItem[] = """)
    json.dump(sentences_list, f, ensure_ascii=False, indent=2)
    f.write(";\n\nexport const SENTENCE_CATEGORIES = Array.from(new Set(SENTENCE_BANK.map(s => s.category)));\n")

print(f"Done! Successfully wrote {len(words_list)} words and {len(sentences_list)} sentences to src/data/")
