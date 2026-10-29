# scripts/build_full_database.py
import re
import json

print("Starting full database compilation...")

with open("public/assets/aistudio/fluently_step3_37e05570.tsx", "r", encoding="utf-8") as f:
    code = f.read()

# 1. Parse existing BASE_DICTIONARY
base_words = []
base_match = re.search(r'const BASE_DICTIONARY = (\[[\s\S]*?\]);', code)
if base_match:
    # Quick parse
    items = re.findall(r"\{\s*id:\s*\d+,\s*word:\s*'([^']*)',\s*bn:\s*'([^']*)',\s*phonetic:\s*'([^']*)',\s*pos:\s*'([^']*)',\s*category:\s*'([^']*)'\s*\}", base_match.group(1))
    for word, bn, phonetic, pos, cat in items:
        base_words.append({
            "word": word.strip(),
            "bn": bn.strip(),
            "phonetic": phonetic.strip(),
            "pos": pos.strip(),
            "category": cat.strip(),
            "level": "A1"
        })

print(f"Base dictionary words: {len(base_words)}")

# 2. Parse WORD_BANK_RAW
raw_dict_match = re.search(r'const WORD_BANK_RAW = \{([\s\S]*?)\};', code)
word_bank_raw = {}
if raw_dict_match:
    lines = raw_dict_match.group(1).split("\n")
    for line in lines:
        m = re.match(r"\s*([A-Za-z0-9_]+):\s*'([^']*)'", line)
        if m:
            cat_key, content = m.group(1), m.group(2)
            word_bank_raw[cat_key] = content

print(f"Raw categories found: {len(word_bank_raw)}")

# Parse existing sentences
sent_raw_match = re.search(r'const SENTENCE_RAW = `([\s\S]*?)`;', code)
existing_sentences = []
if sent_raw_match:
    for line in sent_raw_match.group(1).strip().split("\n"):
        parts = line.strip().split("|")
        if len(parts) == 3:
            existing_sentences.append({
                "category": parts[0].strip(),
                "en": parts[1].strip(),
                "bn": parts[2].strip()
            })
print(f"Existing sentences: {len(existing_sentences)}")
