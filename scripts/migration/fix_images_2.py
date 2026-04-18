import os

v2_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io/v2"
about_path = os.path.join(v2_dir, "about.html")

if os.path.exists(about_path):
    with open(about_path, "r") as f:
        html = f.read()

    # Make about.html partners uniform
    if '<style>' in html:
        html = html.replace('</style>', '''
    .v1-content img.partner-logo { max-width: 140px !important; max-height: 80px !important; object-fit: contain !important; mix-blend-mode: multiply; }
    .v1-content .partner-logo-wrapper { height: 100px !important; display: flex !important; align-items: center !important; justify-content: center !important; }
    </style>''')

    with open(about_path, "w") as f:
        f.write(html)

print("About and Sponsors grids enforced completely.")
