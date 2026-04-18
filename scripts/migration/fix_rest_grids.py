import os
import re

v2_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io/v2"

# -----------------
# 1. FIX LEADERSHIP
# -----------------
leadership_path = os.path.join(v2_dir, "leadership.html")
if os.path.exists(leadership_path):
    with open(leadership_path, "r") as f:
        html = f.read()

    # Reconstruct the card-container to be a proper CSS grid
    html = html.replace('class="card-container"', 'style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0; border-top: 1px solid var(--w-ink); border-left: 1px solid var(--w-ink);"')

    # Reconstruct the cards
    html = html.replace('class="card leader-card"', 'style="background: var(--w-paper); padding: 40px 24px; border-right: 1px solid var(--w-ink); border-bottom: 1px solid var(--w-ink); display: flex; flex-direction: column; align-items: center; text-align: center;"')

    # Force strict dimensions on the images inside leader cards
    # This regex specifically wraps the img inside the newly injected inline style cards
    html = re.sub(r'<img src="(.*?)" alt="(.*?)"(?: style="(.*?)")?>', r'<img src="\1" alt="\2" style="width: 120px !important; height: 120px !important; min-height: 120px !important; border-radius: 50%; object-fit: cover; object-position: \3 top; margin-bottom: 24px; border: 1px solid rgba(18,18,18,0.1);">', html)
    html = html.replace('object-position: object-position: top; top;', 'object-position: top;') # Fix specific dup
    html = html.replace('object-position:  top;', 'object-position: top;')

    # Fix h3 and p inside cards
    html = re.sub(r'<h3>(.*?)</h3>', r'<h3 style="font-size: 24px; font-weight: 600; letter-spacing: -0.5px; margin: 0 0 8px 0; border: none; padding: 0;">\1</h3>', html)
    html = re.sub(r'<p class="role">(.*?)</p>', r'<div style="font-family: \'JetBrains Mono\', monospace; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: var(--w-navy); font-weight: 600; margin-bottom: 14px;">\1</div>', html)
    
    # Fix the recruitment message
    html = html.replace('text-align: center; background-color: #e9ecef; padding: 30px 20px; border-radius: 8px; margin-bottom: 40px;', 
                        'text-align: center; background-color: var(--w-paper); border: 2px dashed var(--w-navy); padding: 60px 40px; margin-top: 60px; margin-bottom: 60px;')
    html = html.replace('color: #004a99;', 'color: var(--w-navy);')
    html = html.replace('background-color: #004a99;', 'background-color: var(--w-navy); padding: 14px 28px; border-radius: 0;')
    html = html.replace('border-bottom: 2px solid #004a99;', 'border-bottom: 1px solid var(--w-ink); font-size: 32px; letter-spacing: -0.5px;')

    with open(leadership_path, "w") as f:
        f.write(html)


# -----------------
# 2. FIX SPONSORS
# -----------------
sponsors_path = os.path.join(v2_dir, "sponsors.html")
if os.path.exists(sponsors_path):
    with open(sponsors_path, "r") as f:
        html = f.read()

    # Reconstruct sponsor grid
    html = html.replace('class="sponsor-grid"', 'style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 0; border-top: 1px solid var(--w-ink); border-left: 1px solid var(--w-ink);"')
    
    # Reconstruct sponsor item
    html = html.replace('class="sponsor-item"', 'style="background: var(--w-paper); border-right: 1px solid var(--w-ink); border-bottom: 1px solid var(--w-ink); height: 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 30px;"')

    # Force image constraint on sponsors
    html = re.sub(r'<img src="(.*?)" alt="(.*?)"(?: style="(.*?)")?>', r'<img src="\1" alt="\2" style="max-height: 80px !important; max-width: 85% !important; object-fit: contain; mix-blend-mode: multiply; margin-bottom: 16px;">', html)

    # Clean up bottom action banner
    html = html.replace('background-color: #f8f9fa; padding: 40px; border-radius: 10px; text-align: center; margin-top: 60px;', 
                        'background-color: var(--w-paper); border: 1px solid var(--w-ink); padding: 60px 40px; text-align: center; margin-top: 80px;')
    html = html.replace('background-color: #004a99;', 'background-color: var(--w-navy); border-radius: 0;')
    
    # Fix Bronze Sponsor header
    html = html.replace('background: linear-gradient(145deg, #cd7f32, #b87333); color: white;', 'background: transparent; color: var(--w-ink); border-bottom: 1px solid var(--w-ink); padding-bottom: 12px; font-size: 32px; letter-spacing: -0.5px;')

    # Re-apply h3 logic specifically for sponsors
    # But wait, earlier I replaced h3 already.. no, only in leadership.
    # In sponsors, let's keep the h3 simple
    html = re.sub(r'<h3>(.*?)</h3>', r'<h3 style="font-size: 16px; font-weight: 600; margin: 0 0 8px 0; border: none; padding: 0;">\1</h3>', html)
    html = re.sub(r'<p><a href="(.*?)"(.*?)>Website</a>\s*\|\s*<a href="(.*?)"(.*?)>Shop</a></p>', r'<div style="font-size: 12px; font-family: monospace; opacity: 0.6;"><a href="\1" style="text-decoration:underline;">Website</a> | <a href="\3" style="text-decoration:underline;">Shop</a></div>', html)
    html = re.sub(r'<p><a href="(.*?)"(.*?)>Website</a></p>', r'<div style="font-size: 12px; font-family: monospace; opacity: 0.6;"><a href="\1" style="text-decoration:underline;">Website</a></div>', html)

    with open(sponsors_path, "w") as f:
        f.write(html)

print("Leadership and Sponsors natively cleaned with specific targeted selectors.")
