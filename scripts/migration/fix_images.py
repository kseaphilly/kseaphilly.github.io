import os
import re

v2_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io/v2"

# 1. Update leadership.html inline styles for images
leadership_path = os.path.join(v2_dir, "leadership.html")
if os.path.exists(leadership_path):
    with open(leadership_path, "r") as f:
        html = f.read()

    # The member card images originally looked like <img src="..." alt="...">
    # So we need to regex replace the img tags that are inside the v1-content div
    # Or simply add a CSS rule to the <style> block we already injected.
    
    # Locate the injected <style> block and add a robust rule for leadership images
    if '/* Fallback */' in html:
        # replace the fallback rule
        html = html.replace('.v1-content .profile-photo { width: 80px; height: 80px; object-fit: cover; border-radius: 50%; opacity: 0; } /* Fallback */', 
                            '.v1-content img { border-radius: 0; max-width: 100%; }\n        .v1-content .member-card img, .v1-content div[style*="display: flex; align-items: center; gap: 20px;"] img { width: 90px !important; height: 90px !important; min-width: 90px !important; object-fit: cover !important; border-radius: 50% !important; border: 1px solid rgba(0,0,0,0.1); }')
    else:
        # Just in case, inject before </style> or <section class="v1-content">
        html = html.replace('</style>', '    .v1-content div[style*="display: flex; align-items: center; gap: 20px;"] img { width: 90px !important; height: 90px !important; min-width: 90px !important; object-fit: cover !important; border-radius: 50% !important; border: 1px solid rgba(0,0,0,0.1); }\n    </style>')
    
    with open(leadership_path, "w") as f:
        f.write(html)

# 2. Update sponsors.html directly
sponsors_path = os.path.join(v2_dir, "sponsors.html")
if os.path.exists(sponsors_path):
    with open(sponsors_path, "r") as f:
        html = f.read()
    
    html = html.replace('<h1>Sponsors</h1>', '''
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.7; margin-bottom: 20px;">
            § 01 — Partnerships
        </div>
        <h1 style="font-size: 64px; font-weight: 600; line-height: 0.95; letter-spacing: -2px; margin: 0 0 20px 0; color: var(--w-ink);">
            Sponsors
        </h1>
        <p style="font-size: 20px; line-height: 1.55; max-width: 680px; margin-bottom: 60px; color: var(--w-ink); opacity: 0.85;">
            Our chapter connects members across Philadelphia. This network is made possible thanks to our incredible partners.
        </p>
    ''')

    html = re.sub(r'<p>We are grateful for the support.*?community\.</p>', '', html, count=1) 

    # Clean the Sponsor Grid
    html = html.replace('class="partner-grid"', 'style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--w-ink); border-left: 1px solid var(--w-ink); margin-bottom: 0;"')
    
    # Ensure partners have consistent sizes
    html = html.replace('class="card partner-card v1-styled"', 'style="padding: 24px; border-right: 1px solid var(--w-ink); border-bottom: 1px solid var(--w-ink); display: flex; align-items: center; justify-content: center; background: var(--w-paper); height: 160px;"')

    # Remove extra text from sponsor cards assuming they just have an image and maybe a name.
    # We will enforce the image size robustly in the CSS block.
    if '<style>' in html:
        html = html.replace('</style>', '    .v1-content .partner-grid div[style*="height: 160px;"] img { max-width: 85% !important; max-height: 70px !important; object-fit: contain !important; mix-blend-mode: multiply; }\n    .v1-content .partner-grid div[style*="height: 160px;"] p, .v1-content .partner-grid div[style*="height: 160px;"] h3 { display: none !important; }\n    </style>')
    
    # Fix mobile responsiveness for the grid
    # Since we can't easily add media queries to inline styles, we just add it to the style block.
    html = html.replace('</style>', '    @media (max-width: 1024px) { .v1-content .partner-grid { grid-template-columns: repeat(2, 1fr) !important; } }\n    </style>')

    with open(sponsors_path, "w") as f:
        f.write(html)

print("Images enforced.")
