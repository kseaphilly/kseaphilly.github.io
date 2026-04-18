import os
import re

v2_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io/v2"
events_path = os.path.join(v2_dir, "events.html")

if os.path.exists(events_path):
    with open(events_path, "r") as f:
        html = f.read()

    # The block we want to replace starts after '<div style="display: flex; gap: 20px; flex-wrap: wrap;">'
    # and ends before 'Past Events'
    
    new_upcoming_events = '''
        <div class="events-grid single-row" style="border-top: 1px solid var(--w-ink); border-left: 1px solid var(--w-ink); margin-bottom: 60px;">
            <div class="event-card" id="nmsc-2026" style="border-bottom: 1px solid var(--w-ink);">
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
            
            <div class="event-card" id="step-up-2026" style="border-bottom: 1px solid var(--w-ink);">
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
            
            <!-- Empty card to maintain grid -->
            <div class="event-card" style="border-bottom: 1px solid var(--w-ink); background: var(--w-cream); display: flex; align-items: center; justify-content: center; opacity: 0.4;">
                <div style="font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 1px;">More TBA</div>
            </div>
        </div>
    '''

    # Using regex to replace the old block
    html = re.sub(r'<div style="display: flex; gap: 20px; flex-wrap: wrap;">(.*?)<div style="font-family: \'JetBrains Mono\'', 
                  new_upcoming_events + '<div style="font-family: \'JetBrains Mono\'', 
                  html, flags=re.DOTALL)

    # Note: there is also an empty `<p style="text-align: center... Stay tuned..."` that we might want to kill.
    html = re.sub(r'<p style="text-align: center; max-width: 800px; margin: 0 auto 40px auto;">Stay tuned for upcoming events.\s*</p>', '', html)

    # Force past events cards to have the right padding if they still have the double style bug
    html = re.sub(r'<div style="padding: 40px; margin-bottom: 40px; background: var\(--w-paper\); border: 1px solid var\(--w-ink\);" id="(.*?)"\s*style=".*?"', 
                  r'<div style="padding: 40px; margin-bottom: 40px; background: var(--w-paper); border: 1px solid var(--w-ink);" id="\1"', html)

    with open(events_path, "w") as f:
        f.write(html)

print("Events fully patched.")
