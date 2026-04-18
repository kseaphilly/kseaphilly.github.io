import os
import re

v2_dir = "/Users/wxc151/Documents/gitRepos/kseaphilly.github.io/v2"
mem_path = os.path.join(v2_dir, "membership_instruction.html")

if os.path.exists(mem_path):
    with open(mem_path, "r") as f:
        html = f.read()

    css_injection = """
        .v1-content .step { background: var(--w-paper); border: 1px solid var(--w-ink); padding: 40px; margin-bottom: 40px; position: relative; }
        .v1-content .step img { max-width: 80%; border: 1px solid rgba(18,18,18,0.1); box-shadow: 4px 4px 0 rgba(18,18,18,0.05); margin: 30px auto 0 auto; display: block; }
        .v1-content .step-number { font-family: 'JetBrains Mono', monospace; font-size: 80px; font-weight: 700; line-height: 0.8; color: var(--w-navy); opacity: 0.1; position: absolute; top: -20px; right: 20px; }
        .v1-content .step h3 { font-size: 24px; font-weight: 600; margin: 0 0 16px 0; color: var(--w-navy); }
        .v1-content .step p, .v1-content .step ul { margin-bottom: 20px; }
        .v1-content .mobile-process { margin-top: 80px; padding-top: 60px; border-top: 1px dashed var(--w-ink); }
        .v1-content .mobile-step { display: flex; gap: 40px; align-items: flex-start; background: var(--w-paper); border: 1px solid var(--w-ink); padding: 40px; margin-bottom: 24px; }
        .v1-content .mobile-step img { max-height: 350px; width: auto; border: 1px solid rgba(18,18,18,0.1); box-shadow: 4px 4px 0 rgba(18,18,18,0.05); margin: 0; }
        .v1-content .mobile-step-content { flex: 1; }
        @media (max-width: 768px) { .v1-content .mobile-step { flex-direction: column; } .v1-content .step img { max-width: 100%; } }
    """
    
    html = html.replace('.v1-content .profile-photo { width: 80px; height: 80px; object-fit: cover; border-radius: 50%; opacity: 0; } /* Fallback */', css_injection)
    
    # Fix the dual grid inside Step 5
    html = html.replace('grid-template-columns: 1fr 1fr; gap: 20px;', 'grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 20px;')
    html = html.replace('margin-top: 60px;', 'margin-top: 80px; border-top: 1px solid var(--w-ink); padding-top: 40px;')
    
    # Restyle bottoms buttons
    html = html.replace('background-color: #6c757d;', 'background-color: var(--w-ink); border-radius: 0; display: inline-block;')

    with open(mem_path, "w") as f:
        f.write(html)

print("Membership instructions restyled.")
