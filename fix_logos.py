import os, glob

v2_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io/v2"

html_files = glob.glob(os.path.join(v2_dir, "*.html"))
for file in html_files:
    with open(file, 'r') as f:
        content = f.read()
    
    # Fix the non-existent seal file name
    content = content.replace('ksea-philly-seal.png', 'ksea_phily_logo.png')
    
    with open(file, 'w') as f:
        f.write(content)

# Also fix the root files which I modified (index_new.html, index.html)
root_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io"
for file in ["index.html", "index_new.html"]:
    filepath = os.path.join(root_dir, file)
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            content = f.read()
        content = content.replace('ksea-philly-seal.png', 'ksea_phily_logo.png')
        with open(filepath, 'w') as f:
            f.write(content)

print("Logo filenames updated.")
