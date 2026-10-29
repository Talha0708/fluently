# scripts/compile_full_db.py
import re
import json
import os

print("Compiling 3000+ words and 1000+ sentences...")

with open("public/assets/aistudio/fluently_step3_37e05570.tsx", "r", encoding="utf-8") as f:
    orig = f.read()

# 1. Base Words
seen_words = set()
words_list = []

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

print(f"Original extracted words: {len(words_list)}")

# 3. Load Sentences from original
sentences_list = []
seen_sents = set()

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

print(f"Original extracted sentences: {len(sentences_list)}")
