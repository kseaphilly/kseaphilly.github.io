import os, glob, re

root = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io"
v2 = os.path.join(root, "v2")

# Create v2 if it doesn't exist
os.makedirs(v2, exist_ok=True)

with open(os.path.join(v2, "index.html"), "r") as f:
    v2_idx = f.read()

# Separate the layout using the known hero boundary
try:
    header = v2_idx.split('<section class="hero">')[0]
except:
    # If index_new.html doesn't have hero, just split at first section
    header = v2_idx.split('<section')[0]

try:
    footer = "\n    " + v2_idx[v2_idx.find('<footer>'):]
except:
    footer = "</body>\n</html>"

# Fix assets links in header/footer to be relative to v2/ (i.e. ../assets)
header = header.replace('"assets/', '"../assets/')
footer = footer.replace('"assets/', '"../assets/')

html_files = [f for f in glob.glob(os.path.join(root, "*.html")) if os.path.basename(f) not in ["index.html", "index_new.html"]]

for file in html_files:
    fname = os.path.basename(file)
    with open(file, "r") as f:
        content = f.read()
    
    # Extract <main>
    main_match = re.search(r'<main.*?>(.*?)</main>', content, re.DOTALL | re.IGNORECASE)
    if not main_match:
        # If no <main>, try grabbing everything inside <body> after <header>
        body_match = re.search(r'<body.*?>(.*?)</body>', content, re.DOTALL | re.IGNORECASE)
        if body_match:
            body_content = body_match.group(1)
            # Remove <header>
            body_content = re.sub(r'<header.*?>.*?</header>', '', body_content, flags=re.DOTALL | re.IGNORECASE)
            # Remove <footer>
            body_content = re.sub(r'<footer.*?>.*?</footer>', '', body_content, flags=re.DOTALL | re.IGNORECASE)
            main_content = body_content
        else:
            continue
    else:
        main_content = main_match.group(1)
    
    # Check if empty content (e.g. google verify file)
    if not main_content.strip() or len(main_content) < 50:
        continue
    
    # fix images and links
    main_content = main_content.replace('"images/', '"../images/')
    main_content = main_content.replace('"symposium/', '"../symposium/')
    main_content = main_content.replace('"css/', '"../css/')
    main_content = main_content.replace('"assets/', '"../assets/')
    main_content = main_content.replace('"data/', '"../data/')
    main_content = main_content.replace('href="images/', 'href="../images/')
    
    # Add a CSS wrapper for legacy content to not look totally broken
    legacy_css = """
    <style>
        .v1-content h1 { font-size: 48px; font-weight: 600; letter-spacing: -1px; margin-bottom: 24px; color: var(--w-navy); }
        .v1-content h2 { font-size: 32px; font-weight: 600; letter-spacing: -0.5px; margin-top: 40px; margin-bottom: 20px; border-bottom: 1px solid var(--w-ink); padding-bottom: 10px; }
        .v1-content h3 { font-size: 24px; font-weight: 600; margin-top: 30px; margin-bottom: 16px; }
        .v1-content p { font-size: 16px; line-height: 1.6; margin-bottom: 16px; opacity: 0.85; }
        .v1-content ul, .v1-content ol { font-size: 16px; line-height: 1.6; margin-bottom: 16px; opacity: 0.85; padding-left: 20px; }
        .v1-content li { margin-bottom: 8px; }
        .v1-content a { color: var(--w-navy); text-decoration: underline; }
        .v1-content a.btn { text-decoration: none; display: inline-block; background: var(--w-navy); color: var(--w-cream); padding: 10px 20px; font-weight: 600; }
        .v1-content .card { background: var(--w-paper); padding: 32px; border: 1px solid var(--w-ink); margin-bottom: 24px; }
        .v1-content .partner-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; margin-top: 24px; border-top: 1px solid var(--w-ink); border-left: 1px solid var(--w-ink); }
        .v1-content .partner-card { border: none !important; border-bottom: 1px solid var(--w-ink) !important; border-right: 1px solid var(--w-ink) !important; padding: 32px !important; margin-bottom: 0 !important; display: flex; flex-direction: column; align-items: center; justify-content: flex-start; text-align: center; }
        .v1-content .partner-logo-wrapper { height: 120px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; width: 100%; }
        .v1-content .partner-logo { max-height: 90px; max-width: 90%; object-fit: contain; mix-blend-mode: multiply; }
        .v1-content table { width: 100%; border-collapse: collapse; margin-bottom: 24px; border: 1px solid var(--w-ink); }
        .v1-content th, .v1-content td { border: 1px solid var(--w-ink); padding: 12px; text-align: left; }
        .v1-content th { background: var(--w-ink); color: var(--w-cream); }
        .v1-content .members-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 24px; margin-top: 24px; }
        .v1-content .member-card { padding: 24px; border: 1px solid var(--w-ink); background: var(--w-cream); display: flex; align-items: center; gap: 16px; }
        .v1-content .org-chart { max-width: 100%; height: auto; border: 1px solid var(--w-ink); margin: 24px 0; }
        .v1-content .profile-photo { width: 80px; height: 80px; object-fit: cover; border-radius: 50%; opacity: 0; } /* Fallback */
    </style>
    """
    
    # Handle the weird styling logic.
    # Replace `<div class="partner-grid">` with our style if it exists
    # Replace `<div class="card partner-card">` with our mapped style
    main_content = main_content.replace('class="card partner-card"', 'class="card partner-card v1-styled"')
    
    # We will replace the title in the header
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    page_title = title_match.group(1) if title_match else fname
    
    new_header = re.sub(r'<title>.*?</title>', f'<title>{page_title}</title>', header)
    
    # Set the current link to active in nav?
    # Simple hack: replace `href="fname"` with `href="fname" style="text-decoration: underline;"`
    # Or just let it be. Just rendering the layout is fine.
    
    new_page_content = f"{new_header}\n{legacy_css}\n<section class=\"v1-content\" style=\"padding: 60px 40px; max-width: 1200px; margin: 0 auto; min-height: 60vh;\">\n{main_content}\n</section>\n{footer}"
    
    with open(os.path.join(v2, fname), "w") as f:
        f.write(new_page_content)

print(f"Migration completed for {len(html_files)} files.")
