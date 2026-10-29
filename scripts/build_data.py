# scripts/build_data.py
import re
import os
import json

print("Reading original file...")
with open("public/assets/aistudio/fluently_step3_37e05570.tsx", "r", encoding="utf-8") as f:
    orig_code = f.read()

# Extract existing sentences
sent_raw_match = re.search(r'const SENTENCE_RAW = `([\s\S]*?)`;', orig_code)
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

print(f"Loaded {len(existing_sentences)} existing sentences.")
