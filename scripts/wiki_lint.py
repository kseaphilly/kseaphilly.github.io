#!/usr/bin/env python3
import os
import re

def check_wiki_health():
    wiki_root = "./wiki/"
    v2_path = "./v2/"
    
    print("--- KSEA Philly Wiki Linter (Recursive) ---")
    
    # 1. Collect all wiki files across subfolders
    wiki_files_info = [] # List of (rel_path, filename)
    for root, dirs, files in os.walk(wiki_root):
        for file in files:
            if file.endswith(".md"):
                wiki_files_info.append((os.path.join(root, file), file))
    
    wiki_files = [f[1] for f in wiki_files_info]
    
    # Check for Orphan Wiki Pages (Pages not in index.md)
    with open("./wiki/index.md", "r") as f:
        index_content = f.read()
    orphans = []
    for wf in wiki_files:
        page_name = wf.replace(".md", "")
        if f"[[{page_name}]]" not in index_content:
            orphans.append(wf)
    
    if orphans:
        print(f"[!] Warning: Orphan wiki pages found (not in index.md): {orphans}")
    else:
        print("[✓] No orphan wiki pages.")

    # 2. Check for Broken Wikilinks
    broken_links = []
    for full_path, filename in wiki_files_info:
        with open(full_path, "r") as f:
            content = f.read()
            links = re.findall(r"\[\[(.*?)\]\]", content)
            for link in links:
                # Flat check since we use wikilink style [[Name]] 
                if f"{link}.md" not in wiki_files and not link.startswith("../") and link != "AGENTS":
                    broken_links.append((filename, link))

    if broken_links:
        print(f"[!] Warning: Broken [[wikilinks]] found: {broken_links}")
    else:
        print("[✓] All wikilinks are valid.")

    # 3. Content Drift Check (Simple check: Does every HTML have a Wiki counterpart?)
    html_files = [f for f in os.listdir(v2_path) if f.endswith(".html")]
    missing_wiki = []
    for hf in html_files:
        if hf == "index.html": continue # index is special
        # Just a heuristic check
        found = False
        for wf in wiki_files:
            if hf.split(".")[0].lower() in wf.lower():
                found = True
        if not found:
            missing_wiki.append(hf)
            
    if missing_wiki:
        print(f"[!] Warning: HTML files without clear Wiki entities: {missing_wiki}")
    else:
        print("[✓] HTML coverage in Wiki looks good.")

if __name__ == "__main__":
    check_wiki_health()
