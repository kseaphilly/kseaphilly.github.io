import os
import re

v2_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io/v2"
root_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io"
events_v2_path = os.path.join(v2_dir, "events.html")
events_root_path = os.path.join(root_dir, "events.html")

if os.path.exists(events_root_path):
    with open(events_root_path, "r") as f:
        root_html = f.read()

    # Extract exactly what is inside <main> or the container
    main_match = re.search(r'<main>.*?</main>', root_html, re.DOTALL)
    if not main_match:
        main_match = re.search(r'<div class="container"(?:.*?)>.*?</div>\s*<div class="container"(?:.*?)>.*?</div>', root_html, re.DOTALL)
    
    # We will just fetch the core v2 index as template
    with open(os.path.join(v2_dir, "index.html"), "r") as f:
        v2_index = f.read()
    
    header = v2_index.split('<section class="hero">')[0]
    footer = v2_index.split('<footer>')[1]
    
    # Extract the main blocks from original events.html
    # Upcoming Events section
    upcoming_block = re.search(r'<div class="container".*?>(.*?)</div>\s*<div class="container"(?:.*?)id="past-events"', root_html, re.DOTALL)
    
    # Past Events section
    past_block = re.search(r'(<div class="container"(?:.*?)id="past-events".*?</div>)\s*</main>', root_html, re.DOTALL)
    
    if not past_block:
        past_block = re.search(r'(<div class="container".*?id="past-events".*?</div>(?:\s*<div class="container".*?</div>)*)', root_html, re.DOTALL)
    
    # We'll just take the entire original main and refactor it properly without deleting things.
    orig_main = re.search(r'<main>(.*?)</main>', root_html, re.DOTALL).group(1)
    
    new_html = header + '\n\n<section class="v1-content" style="padding: 60px 40px; max-width: 1200px; margin: 0 auto; min-height: 60vh;">\n' + orig_main + '\n</section>\n\n<footer>' + footer

    # 1. Update image paths
    new_html = new_html.replace('"images/', '"../images/')
    new_html = new_html.replace('"assets/', '"../assets/')
    
    # 2. Add style fallback
    style_block = '''
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
        .v1-content img { border-radius: 0; max-width: 100%; }
        .v1-content table { width: 100%; border-collapse: collapse; margin-bottom: 24px; border: 1px solid var(--w-ink); }
        .v1-content th, .v1-content td { border: 1px solid var(--w-ink); padding: 12px; text-align: left; }
        .v1-content th { background: var(--w-ink); color: var(--w-cream); }
    </style>
    '''
    new_html = new_html.replace('<section class="v1-content"', style_block + '<section class="v1-content"')

    # 3. Apply the Events Page custom v2 redesigns safely
    new_html = new_html.replace('<h1>Events</h1>', '''
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
    
    new_html = re.sub(r'<p style="text-align: center.*?</p>', '', new_html, count=1) 
    
    new_html = new_html.replace('<h2 style="margin-top: 40px; border-bottom: 2px solid #003478; padding-bottom: 10px; color: #003478;">Past Events</h2>\n            <p style="text-align: center; max-width: 800px; margin: 0 auto 40px auto;">\n                Here is a look at our recent gatherings.\n            </p>', '''
        <div style="font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.8px; text-transform: uppercase; opacity: 0.7; margin-bottom: 12px; margin-top: 100px;">
            § 02 — Archive
        </div>
        <h2 style="font-size: 40px; font-weight: 600; margin: 0 0 30px 0; border: none; padding: 0;">Past Events</h2>
    ''')
    
    # 4. Replace the Upcoming Events block with the beautiful v2 grid
    new_upcoming = '''
        <div class="events-grid single-row" style="border-top: 1px solid var(--w-ink); border-left: 1px solid var(--w-ink); margin-bottom: 60px; display: grid; grid-template-columns: repeat(3, 1fr);">
            <div class="event-card" id="nmsc-2026" style="border-bottom: 1px solid var(--w-ink); border-right: 1px solid var(--w-ink); padding: 32px 32px 28px; background: var(--w-paper); display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                    <div style="display: inline-block; padding: 4px 10px; background: var(--w-navy); color: var(--w-cream); font-size: 10px; font-family: 'JetBrains Mono', monospace; letter-spacing: 1px; text-transform: uppercase;">Competition</div>
                    <div style="text-align: right;">
                        <div style="font-size: 24px; font-weight: 600; letter-spacing: -0.5px; line-height: 1;">APR 18</div>
                        <div style="font-size: 11px; font-family: 'JetBrains Mono', monospace; opacity: 0.6; margin-top: 4px;">13:20 EDT</div>
                    </div>
                </div>
                <h3 style="font-size: 26px; font-weight: 600; letter-spacing: -0.5px; margin: 0; line-height: 1.1;">NMSC 2026</h3>
                <p style="font-size: 14px; line-height: 1.55; margin-top: 14px; opacity: 0.8; flex: 1;">National Math and Science Competition hosted by KSEA Philadelphia. Arrival by 1:20 PM. Orientation starts at 1:30 PM. Simple snacks and gifts will be provided!</p>
                <div style="border-top: 1px dashed rgba(18,18,18,0.3); padding-top: 14px; display: flex; justify-content: space-between; font-size: 12px; font-family: 'JetBrains Mono', monospace; align-items: center;">
                    <span style="opacity: 0.7;">▸ 3601 SPRUCE ST, PA</span>
                    <span><a href="nmsc.html" style="background: var(--w-navy); color: var(--w-cream); padding: 8px 14px; text-decoration: none; font-weight: 600;">Register →</a></span>
                </div>
            </div>
            
            <div class="event-card" id="step-up-2026" style="border-bottom: 1px solid var(--w-ink); border-right: 1px solid var(--w-ink); padding: 32px 32px 28px; background: var(--w-paper); display: flex; flex-direction: column;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                    <div style="display: inline-block; padding: 4px 10px; background: var(--w-brick); color: var(--w-cream); font-size: 10px; font-family: 'JetBrains Mono', monospace; letter-spacing: 1px; text-transform: uppercase;">Symposium</div>
                    <div style="text-align: right;">
                        <div style="font-size: 24px; font-weight: 600; letter-spacing: -0.5px; line-height: 1;">MAY 16-17</div>
                        <div style="font-size: 11px; font-family: 'JetBrains Mono', monospace; opacity: 0.6; margin-top: 4px;">2-DAY</div>
                    </div>
                </div>
                <h3 style="font-size: 26px; font-weight: 600; letter-spacing: -0.5px; margin: 0; line-height: 1.1;">KSEA STEP-UP 2026</h3>
                <p style="font-size: 14px; line-height: 1.55; margin-top: 14px; opacity: 0.8; flex: 1;">Science and Technology Entrepreneurship Partners' Upscale Program hosted centrally in Philadelphia.</p>
                <div style="border-top: 1px dashed rgba(18,18,18,0.3); padding-top: 14px; display: flex; justify-content: space-between; font-size: 12px; font-family: 'JetBrains Mono', monospace; align-items: center;">
                    <span style="opacity: 0.7;">▸ PHILADELPHIA</span>
                    <span><a href="https://stepup.ksea.org/" target="_blank" style="background: var(--w-navy); color: var(--w-cream); padding: 8px 14px; text-decoration: none; font-weight: 600;">Website ↗</a></span>
                </div>
            </div>
            
            <div class="event-card" style="border-bottom: 1px solid var(--w-ink); background: var(--w-cream); padding: 32px; display: flex; align-items: center; justify-content: center; opacity: 0.4;">
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 1px;">More TBA</div>
            </div>
        </div>
    '''
    
    new_html = re.sub(r'<div style="display: flex; gap: 20px; flex-wrap: wrap;">.*?</div>\s*</div>\s*</div>', new_upcoming, new_html, flags=re.DOTALL)
    new_html = re.sub(r'<p style="text-align: center; max-width: 800px; margin: 0 auto 40px auto;">Stay tuned for upcoming events.\s*</p>', '', new_html)

    # 5. Clean up old inline styles on past events buttons to match v2
    new_html = new_html.replace('class="card"', 'style="padding: 40px; margin-bottom: 40px; background: var(--w-paper); border: 1px solid var(--w-ink);"')
    new_html = new_html.replace('background-color: #003478;', 'background-color: var(--w-navy);')
    new_html = new_html.replace('border-radius: 5px;', 'border-radius: 0;')
    new_html = new_html.replace('color: #003478;', 'color: var(--w-navy);')

    with open(events_v2_path, "w") as f:
        f.write(new_html)

print("Events page properly restored and restyled.")
