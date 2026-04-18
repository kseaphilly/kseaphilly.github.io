import os
import re

v2_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io/v2"

# 1. Update about.html
about_path = os.path.join(v2_dir, "about.html")
if os.path.exists(about_path):
    with open(about_path, "r") as f:
        about_html = f.read()

    # Redesign the title area
    about_html = about_html.replace('<h1>About Us</h1>', '''
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.7; margin-bottom: 20px;">
            § 01 — Mission & Vision
        </div>
        <h1 style="font-size: 64px; font-weight: 600; line-height: 0.95; letter-spacing: -2px; margin: 0 0 30px 0; color: var(--w-ink);">
            About Us
        </h1>
        <p style="font-size: 20px; line-height: 1.55; max-width: 680px; margin-bottom: 60px; color: var(--w-ink); opacity: 0.85;">
            The KSEA Philadelphia Chapter is a local chapter of the <a href="https://www.ksea.org/" target="_blank" style="text-decoration: underline; color: var(--w-navy);">Korean-American Scientists and Engineers Association (KSEA)</a>. We are dedicated to serving Korean-American scientists and engineers in the Philadelphia metropolitan area.
        </p>
    ''')

    # Remove the first p tag since we integrated it above
    about_html = re.sub(r'<p>The KSEA Philadelphia Chapter is a local chapter.*?Philadelphia metropolitan area\.</p>', '', about_html, flags=re.DOTALL)

    # Redesign the Vision & Mission
    about_html = re.sub(r'<div class="section">\s*<h2>Our Vision</h2>\s*<p>(.*?)</p>\s*<ul>\s*(.*?)\s*</ul>\s*</div>', lambda m: f'''
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-bottom: 60px; padding-top: 40px; border-top: 1px solid var(--w-ink);">
        <div>
            <h2 style="font-size: 32px; font-weight: 600; margin: 0 0 20px 0; border: none; padding: 0;">Vision</h2>
            <p style="font-size: 16px; margin-bottom: 20px;">{m.group(1)}</p>
            <ul style="padding-left: 20px; margin: 0;">
                {m.group(2)}
            </ul>
        </div>
    ''', about_html, count=1)

    about_html = re.sub(r'<div class="section">\s*<h2>Our Mission</h2>\s*<p>(.*?)</p>\s*<ul>\s*(.*?)\s*</ul>\s*</div>', lambda m: f'''
        <div>
            <h2 style="font-size: 32px; font-weight: 600; margin: 0 0 20px 0; border: none; padding: 0;">Mission</h2>
            <p style="font-size: 16px; margin-bottom: 20px;">{m.group(1)}</p>
            <ul style="padding-left: 20px; margin: 0;">
                {m.group(2)}
            </ul>
        </div>
    </div>
    ''', about_html, count=1)

    # Redesign Partners
    about_html = about_html.replace('<div class="section">', '<div style="margin-top: 80px;">')
    about_html = re.sub(r'<h2>Regional Partners</h2>\s*<p>(.*?)</p>', lambda m: f'''
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.7; margin-bottom: 12px;">
            § 02 — Alliance
        </div>
        <h2 style="font-size: 40px; font-weight: 600; margin: 0 0 16px 0; border: none; padding: 0;">Regional Partners</h2>
        <p style="font-size: 16px; max-width: 600px; margin-bottom: 30px;">{m.group(1)}</p>
    ''', about_html)

    about_html = re.sub(r'<h2>APS Partners</h2>\s*<p>(.*?)</p>', lambda m: f'''
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.7; margin-bottom: 12px; margin-top: 80px;">
            § 03 — Affiliates
        </div>
        <h2 style="font-size: 40px; font-weight: 600; margin: 0 0 16px 0; border: none; padding: 0;">APS Partners</h2>
        <p style="font-size: 16px; max-width: 600px; margin-bottom: 30px;">{m.group(1)}</p>
    ''', about_html)

    # Change partner grid styles to match labs-grid
    about_html = about_html.replace('class="partner-grid"', 'style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--w-ink); border-left: 1px solid var(--w-ink);"')
    about_html = about_html.replace('class="card partner-card v1-styled"', 'style="padding: 32px; border-right: 1px solid var(--w-ink); border-bottom: 1px solid var(--w-ink); display: flex; flex-direction: column; align-items: center; justify-content: flex-start; text-align: center; background: var(--w-paper);"')

    # Fix unstyled h3s and ps in partner cards
    about_html = re.sub(r'<h3>(.*?)</h3>', r'<h3 style="font-size: 20px; font-weight: 600; margin: 16px 0 8px 0;">\1</h3>', about_html)

    with open(about_path, "w") as f:
        f.write(about_html)


# 2. Update events.html
events_path = os.path.join(v2_dir, "events.html")
if os.path.exists(events_path):
    with open(events_path, "r") as f:
        events_html = f.read()

    events_html = events_html.replace('<h1>Events</h1>', '''
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.7; margin-bottom: 20px;">
            § 01 — Schedule
        </div>
        <h1 style="font-size: 64px; font-weight: 600; line-height: 0.95; letter-spacing: -2px; margin: 0 0 20px 0; color: var(--w-ink);">
            Events
        </h1>
        <p style="font-size: 20px; line-height: 1.55; max-width: 680px; margin-bottom: 60px; color: var(--w-ink); opacity: 0.85;">
            Join us for upcoming competitions, networking sessions, and symposiums. Explore our past gatherings below.
        </p>
    ''')
    
    events_html = re.sub(r'<p style="text-align: center.*?</p>', '', events_html, count=1) # remove original subtitle
    
    events_html = events_html.replace('<h2 style="margin-top: 40px; border-bottom: 2px solid #003478; padding-bottom: 10px; color: #003478;">Past Events</h2>\n            <p style="text-align: center; max-width: 800px; margin: 0 auto 40px auto;">\n                Here is a look at our recent gatherings.\n            </p>', '''
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.7; margin-bottom: 12px; margin-top: 100px;">
            § 02 — Archive
        </div>
        <h2 style="font-size: 40px; font-weight: 600; margin: 0 0 30px 0; border: none; padding: 0;">Past Events</h2>
    ''')
    
    events_html = events_html.replace('class="card"', 'style="padding: 40px; margin-bottom: 40px; background: var(--w-paper); border: 1px solid var(--w-ink);"')

    # Button cleanups
    events_html = events_html.replace('background-color: #003478;', 'background-color: var(--w-navy);')
    events_html = events_html.replace('border-radius: 5px;', 'border-radius: 0;')
    events_html = events_html.replace('color: #003478;', 'color: var(--w-navy);')

    with open(events_path, "w") as f:
        f.write(events_html)

# 3. Update leadership.html
leadership_path = os.path.join(v2_dir, "leadership.html")
if os.path.exists(leadership_path):
    with open(leadership_path, "r") as f:
        leadership_html = f.read()

    leadership_html = leadership_html.replace('<h1>Leadership</h1>', '''
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.7; margin-bottom: 20px;">
            § 01 — Organization
        </div>
        <h1 style="font-size: 64px; font-weight: 600; line-height: 0.95; letter-spacing: -2px; margin: 0 0 20px 0; color: var(--w-ink);">
            Leadership
        </h1>
    ''')

    leadership_html = re.sub(r'<h2>President\'s Message</h2>', '<h2 style="font-size: 32px; font-weight: 600; margin: 60px 0 20px 0; border-bottom: none; padding: 0;">President\'s Message</h2>', leadership_html)
    leadership_html = re.sub(r'<h2>Organization Chart</h2>', '<h2 style="font-size: 32px; font-weight: 600; margin: 80px 0 20px 0; border-bottom: none; padding: 0;">Organization Chart</h2>', leadership_html)
    leadership_html = re.sub(r'<h2>Past Presidents</h2>', '<h2 style="font-size: 32px; font-weight: 600; margin: 80px 0 20px 0; border-bottom: none; padding: 0;">Past Presidents</h2>', leadership_html)

    # Convert the member grid
    leadership_html = leadership_html.replace('<div class="members-grid">', '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px; margin-top: 30px;">')
    leadership_html = leadership_html.replace('<div class="member-card">', '<div style="padding: 24px; border: 1px solid var(--w-ink); background: var(--w-paper); display: flex; align-items: center; gap: 20px;">')

    with open(leadership_path, "w") as f:
        f.write(leadership_html)

print("Redesign applied correctly to main pages.")
