#!/usr/bin/env python3
import os
import re

def check_wiki_health():
    wiki_path = "./wiki/entities/"
    v2_path = "./v2/"
    
    print("--- KSEA Philly Wiki Linter ---")
    
    # 1. Check for Orphan Wiki Pages (Pages not in index.md)
    with open("./wiki/index.md", "r") as f:
        index_content = f.read()
    
    wiki_files = [f for f in os.listdir(wiki_path) if f.endswith(".md")]
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
    for wf in wiki_files:
        with open(os.path.join(wiki_path, wf), "r") as f:
            content = f.read()
            links = re.findall(r"\[\[(.*?)\]\]", content)
            for link in links:
                if not os.path.exists(os.path.join(wiki_path, f"{link}.md")) and \
                   not os.path.exists(os.path.join("./wiki/concepts/", f"{link}.md")) and \
                   not os.path.exists(os.path.join("./wiki/", f"{link}.md")) and \
                   not link.startswith("../"): # Ignore root links for now
                    broken_links.append((wf, link))

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
