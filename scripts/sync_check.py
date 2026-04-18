import os
import re

def get_wiki_entities(category):
    entities = {}
    path = f"wiki/entities/{category}"
    if not os.path.exists(path):
        return {}
    
    for filename in os.listdir(path):
        if filename.endswith(".md") and not filename.startswith("_") and filename != "index.md":
            with open(os.path.join(path, filename), "r") as f:
                content = f.read()
                # Use regex to extract YAML-like fields without PyYAML dependency
                # title: [value]
                title_match = re.search(r"title:\s*(.*)", content)
                # affiliation: [value]
                aff_match = re.search(r"affiliation:\s*(.*)", content)
                
                name = title_match.group(1).strip() if title_match else filename[:-3]
                aff = aff_match.group(1).strip() if aff_match else ""
                
                entities[name] = {"affiliation": aff}
    return entities

def normalize(text):
    # Remove HTML tags, newlines, and extra spaces
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    return text.strip().lower()

def check_leadership_sync():
    print("--- Checking Leadership Sync (Wiki -> v2 HTML) ---")
    wiki_people = get_wiki_entities("people")
    with open("v2/leadership.html", "r") as f:
        html_raw = f.read()
    
    html_norm = normalize(html_raw)
    
    for name, data in wiki_people.items():
        if name == "People": continue # Skip category node
        
        name_norm = normalize(name)
        if name_norm not in html_norm:
            print(f"[!] MISMATCH: '{name}' not found in v2/leadership.html")
        else:
            aff = data.get('affiliation', '')
            aff_norm = normalize(aff)
            if aff_norm and aff_norm not in html_norm:
                print(f"[!] WARNING: Affiliation '{aff}' for {name} missing in HTML")
            else:
                print(f"[✓] SYNCED: {name}")

def check_events_sync():
    print("\n--- Checking Events Sync (Wiki -> v2 HTML) ---")
    wiki_events = get_wiki_entities("events")
    with open("v2/events.html", "r") as f:
        html_raw = f.read()
    
    html_norm = normalize(html_raw)
    
    for title, data in wiki_events.items():
        if title in ["Events Log", "Specific Events"]: continue # Skip summary nodes
        
        title_norm = normalize(title)
        if title_norm not in html_norm:
            print(f"[!] MISMATCH: Event '{title}' not found in v2/events.html")
        else:
            print(f"[✓] SYNCED: {title}")

if __name__ == "__main__":
    check_leadership_sync()
    check_events_sync()
