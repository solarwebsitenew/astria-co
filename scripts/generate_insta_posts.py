import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/images/insta', exist_ok=True)

# Fonts
FONT_BOLD_PATH = "C:/Windows/Fonts/segoeuib.ttf"
FONT_REG_PATH = "C:/Windows/Fonts/segoeui.ttf"
FONT_SEMIBOLD_PATH = "C:/Windows/Fonts/segoeuisl.ttf"

def get_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()

def draw_rounded_rect(draw, bbox, radius, fill=None, outline=None, width=1):
    draw.rounded_rectangle(bbox, radius=radius, fill=fill, outline=outline, width=width)

def create_post_1():
    # Hook Testing Matrix
    w, h = 800, 800
    img = Image.new('RGB', (w, h), color='#070b14')
    draw = ImageDraw.Draw(img)

    # Subtle background gradient/glow
    for y in range(h):
        ratio = y / h
        r = int(7 + ratio * 8)
        g = int(11 + ratio * 15)
        b = int(20 + ratio * 35)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    # Top header bar
    f_small = get_font(FONT_BOLD_PATH, 16)
    f_handle = get_font(FONT_REG_PATH, 16)
    
    # Pill
    draw_rounded_rect(draw, (50, 50, 230, 86), radius=6, fill='#1e293b', outline='#334155')
    draw.text((64, 58), "CREATIVE SPRINT", fill='#38bdf8', font=f_small)

    draw.text((560, 60), "@astriacreative.co", fill='#94a3b8', font=f_handle)

    # Main Headline
    f_h1 = get_font(FONT_BOLD_PATH, 42)
    f_sub = get_font(FONT_REG_PATH, 20)
    
    draw.text((50, 125), "The 3-Second Hook Matrix:", fill='#ffffff', font=f_h1)
    draw.text((50, 180), "How we cut CPL by 48% on Meta Ads", fill='#38bdf8', font=f_h1)
    draw.text((50, 245), "Creative fatigue kills ad performance. Here is our sprint testing framework.", fill='#94a3b8', font=f_sub)

    # Card 1: Control Ad
    draw_rounded_rect(draw, (50, 310, 380, 560), radius=12, fill='#0f172a', outline='#1e293b', width=2)
    draw.text((75, 335), "BEFORE: STANDARD AD", fill='#ef4444', font=get_font(FONT_BOLD_PATH, 15))
    draw.text((75, 375), "Hook Retention (3s):", fill='#64748b', font=get_font(FONT_REG_PATH, 16))
    draw.text((75, 400), "18.4%", fill='#ffffff', font=get_font(FONT_BOLD_PATH, 32))
    
    draw.text((75, 455), "Blended ROAS:", fill='#64748b', font=get_font(FONT_REG_PATH, 16))
    draw.text((75, 480), "1.9x", fill='#f87171', font=get_font(FONT_BOLD_PATH, 32))

    # Card 2: Optimized Hook
    draw_rounded_rect(draw, (415, 310, 750, 560), radius=12, fill='#0c1e36', outline='#0284c7', width=2)
    draw.text((440, 335), "WINNER: HOOK-FIRST CREATIVE", fill='#10b981', font=get_font(FONT_BOLD_PATH, 15))
    draw.text((440, 375), "Hook Retention (3s):", fill='#7dd3fc', font=get_font(FONT_REG_PATH, 16))
    draw.text((440, 400), "51.8% (+181%)", fill='#ffffff', font=get_font(FONT_BOLD_PATH, 32))
    
    draw.text((440, 455), "Blended ROAS:", fill='#7dd3fc', font=get_font(FONT_REG_PATH, 16))
    draw.text((440, 480), "4.8x (+152%)", fill='#34d399', font=get_font(FONT_BOLD_PATH, 32))

    # Bottom summary bar
    draw_rounded_rect(draw, (50, 600, 750, 720), radius=10, fill='#111827', outline='#1f2937')
    draw.text((75, 625), "KEY TAKEAWAY", fill='#fbbf24', font=get_font(FONT_BOLD_PATH, 14))
    draw.text((75, 655), "The first 3 seconds dictate 70% of downstream conversion efficiency.", fill='#f1f5f9', font=get_font(FONT_BOLD_PATH, 18))
    draw.text((75, 682), "Never iterate copy before validating the visual thumb-stop hook.", fill='#94a3b8', font=get_font(FONT_REG_PATH, 15))

    img.save('public/images/insta/insta1.png')
    print("insta1.png created successfully")

def create_post_2():
    # E-commerce Scaling Study
    w, h = 800, 800
    img = Image.new('RGB', (w, h), color='#070b14')
    draw = ImageDraw.Draw(img)

    for y in range(h):
        ratio = y / h
        r = int(7 + ratio * 15)
        g = int(11 + ratio * 8)
        b = int(20 + ratio * 28)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    f_small = get_font(FONT_BOLD_PATH, 16)
    f_handle = get_font(FONT_REG_PATH, 16)
    
    draw_rounded_rect(draw, (50, 50, 200, 86), radius=6, fill='#1e293b', outline='#334155')
    draw.text((64, 58), "SCALE STUDY", fill='#a855f7', font=f_small)
    draw.text((560, 60), "@astriacreative.co", fill='#94a3b8', font=f_handle)

    f_h1 = get_font(FONT_BOLD_PATH, 42)
    f_sub = get_font(FONT_REG_PATH, 20)

    draw.text((50, 125), "Scaling D2C Past ₹18L/mo", fill='#ffffff', font=f_h1)
    draw.text((50, 180), "With 5.2x Blended ROAS", fill='#a855f7', font=f_h1)
    draw.text((50, 245), "How full-funnel media buying unlocked aggressive profitable growth.", fill='#94a3b8', font=f_sub)

    # 3 Metric Cards in row
    # Card A
    draw_rounded_rect(draw, (50, 310, 265, 480), radius=10, fill='#111827', outline='#1f2937', width=2)
    draw.text((70, 335), "AD SPEND", fill='#94a3b8', font=get_font(FONT_BOLD_PATH, 13))
    draw.text((70, 370), "₹3.4L", fill='#ffffff', font=get_font(FONT_BOLD_PATH, 34))
    draw.text((70, 425), "Targeted Meta + Search", fill='#64748b', font=get_font(FONT_REG_PATH, 14))

    # Card B
    draw_rounded_rect(draw, (290, 310, 510, 480), radius=10, fill='#111827', outline='#1f2937', width=2)
    draw.text((310, 335), "REVENUE", fill='#94a3b8', font=get_font(FONT_BOLD_PATH, 13))
    draw.text((310, 370), "₹18.2L", fill='#10b981', font=get_font(FONT_BOLD_PATH, 34))
    draw.text((310, 425), "+320% YoY Growth", fill='#64748b', font=get_font(FONT_REG_PATH, 14))

    # Card C
    draw_rounded_rect(draw, (535, 310, 750, 480), radius=10, fill='#111827', outline='#1f2937', width=2)
    draw.text((555, 335), "BLENDED ROAS", fill='#94a3b8', font=get_font(FONT_BOLD_PATH, 13))
    draw.text((555, 370), "5.24x", fill='#38bdf8', font=get_font(FONT_BOLD_PATH, 34))
    draw.text((555, 425), "Sustained for 6 Months", fill='#64748b', font=get_font(FONT_REG_PATH, 14))

    # Bottom Formula Card
    draw_rounded_rect(draw, (50, 520, 750, 720), radius=10, fill='#15102a', outline='#3b0764', width=2)
    draw.text((75, 545), "THE 3-LEVER PLAYBOOK", fill='#c084fc', font=get_font(FONT_BOLD_PATH, 15))
    draw.text((75, 585), "1. Creative Testing Matrix: 6 new UGC hook variations weekly", fill='#e2e8f0', font=get_font(FONT_BOLD_PATH, 16))
    draw.text((75, 625), "2. CAPI Server-Side Tracking: Zero lost purchase signal", fill='#e2e8f0', font=get_font(FONT_BOLD_PATH, 16))
    draw.text((75, 665), "3. Automated WhatsApp Recovery: 22% recovered abandoned carts", fill='#e2e8f0', font=get_font(FONT_BOLD_PATH, 16))

    img.save('public/images/insta/insta2.png')
    print("insta2.png created successfully")

def create_post_3():
    # UGC & Creative Framework
    w, h = 800, 800
    img = Image.new('RGB', (w, h), color='#070b14')
    draw = ImageDraw.Draw(img)

    for y in range(h):
        ratio = y / h
        r = int(7 + ratio * 20)
        g = int(11 + ratio * 15)
        b = int(20 + ratio * 8)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    f_small = get_font(FONT_BOLD_PATH, 16)
    f_handle = get_font(FONT_REG_PATH, 16)
    
    draw_rounded_rect(draw, (50, 50, 230, 86), radius=6, fill='#1e293b', outline='#334155')
    draw.text((64, 58), "CREATIVE INTEL", fill='#f97316', font=f_small)
    draw.text((560, 60), "@astriacreative.co", fill='#94a3b8', font=f_handle)

    f_h1 = get_font(FONT_BOLD_PATH, 42)
    f_sub = get_font(FONT_REG_PATH, 20)

    draw.text((50, 125), "High-Converting UGC Ad", fill='#ffffff', font=f_h1)
    draw.text((50, 180), "Scripting Architecture", fill='#fb923c', font=f_h1)
    draw.text((50, 245), "Stop making corporate video ads. Use this 4-step direct response formula.", fill='#94a3b8', font=f_sub)

    # 4 Steps Diagram
    steps = [
        ("00 - 03s", "PATTERN INTERRUPT", "Visually shocking or provocative question"),
        ("03 - 15s", "PROBLEM AGITATION", "Demonstrate relatable pain point on screen"),
        ("15 - 30s", "UNIQUE MECHANISM", "Show your product solving the root cause"),
        ("30 - 45s", "NO-BRAINER OFFER", "Scarcity, guarantee, and crystal-clear CTA")
    ]

    for idx, (time_slot, title, desc) in enumerate(steps):
        top_y = 310 + idx * 95
        draw_rounded_rect(draw, (50, top_y, 750, top_y + 80), radius=8, fill='#0f172a', outline='#1e293b')
        # Time badge
        draw_rounded_rect(draw, (65, top_y + 15, 175, top_y + 65), radius=6, fill='#ea580c')
        draw.text((80, top_y + 26), time_slot, fill='#ffffff', font=get_font(FONT_BOLD_PATH, 16))

        draw.text((200, top_y + 18), title, fill='#fdba74', font=get_font(FONT_BOLD_PATH, 16))
        draw.text((200, top_y + 44), desc, fill='#94a3b8', font=get_font(FONT_REG_PATH, 15))

    draw_rounded_rect(draw, (50, 715, 750, 755), radius=6, fill='#1c1917')
    draw.text((70, 725), "Verified across 100+ Meta & TikTok Ad Creatives in 2026", fill='#a8a29e', font=get_font(FONT_BOLD_PATH, 14))

    img.save('public/images/insta/insta3.png')
    print("insta3.png created successfully")

def create_post_4():
    # Tracking & Attribution
    w, h = 800, 800
    img = Image.new('RGB', (w, h), color='#070b14')
    draw = ImageDraw.Draw(img)

    for y in range(h):
        ratio = y / h
        r = int(7 + ratio * 8)
        g = int(11 + ratio * 25)
        b = int(20 + ratio * 20)
        draw.line([(0, y), (w, y)], fill=(r, g, b))

    f_small = get_font(FONT_BOLD_PATH, 16)
    f_handle = get_font(FONT_REG_PATH, 16)
    
    draw_rounded_rect(draw, (50, 50, 230, 86), radius=6, fill='#1e293b', outline='#334155')
    draw.text((64, 58), "TECH & ATTRIBUTION", fill='#10b981', font=f_small)
    draw.text((560, 60), "@astriacreative.co", fill='#94a3b8', font=f_handle)

    f_h1 = get_font(FONT_BOLD_PATH, 42)
    f_sub = get_font(FONT_REG_PATH, 20)

    draw.text((50, 125), "Meta CAPI + Server-Side", fill='#ffffff', font=f_h1)
    draw.text((50, 180), "Attribution Setup 2026", fill='#34d399', font=f_h1)
    draw.text((50, 245), "Why browser pixels miss 30%+ conversions and how we fix it.", fill='#94a3b8', font=f_sub)

    # 2 Comparison Columns
    draw_rounded_rect(draw, (50, 310, 380, 560), radius=12, fill='#18181b', outline='#27272a', width=2)
    draw.text((75, 335), "STANDARD BROWSER PIXEL", fill='#ef4444', font=get_font(FONT_BOLD_PATH, 15))
    draw.text((75, 375), "Event Match Quality:", fill='#71717a', font=get_font(FONT_REG_PATH, 15))
    draw.text((75, 400), "4.2 / 10 (Poor)", fill='#f87171', font=get_font(FONT_BOLD_PATH, 28))
    draw.text((75, 460), "iOS Signal Loss:", fill='#71717a', font=get_font(FONT_REG_PATH, 15))
    draw.text((75, 485), "-35% Data Lost", fill='#f87171', font=get_font(FONT_BOLD_PATH, 28))

    draw_rounded_rect(draw, (415, 310, 750, 560), radius=12, fill='#022c22', outline='#059669', width=2)
    draw.text((440, 335), "ASTRIA SERVER-SIDE CAPI", fill='#34d399', font=get_font(FONT_BOLD_PATH, 15))
    draw.text((440, 375), "Event Match Quality:", fill='#a7f3d0', font=get_font(FONT_REG_PATH, 15))
    draw.text((440, 400), "9.4 / 10 (Great)", fill='#ffffff', font=get_font(FONT_BOLD_PATH, 28))
    draw.text((440, 460), "Purchase Attribution:", fill='#a7f3d0', font=get_font(FONT_REG_PATH, 15))
    draw.text((440, 485), "99.2% Accurate", fill='#34d399', font=get_font(FONT_BOLD_PATH, 28))

    draw_rounded_rect(draw, (50, 600, 750, 720), radius=10, fill='#064e3b', outline='#047857')
    draw.text((75, 625), "WHY THIS MATTERS", fill='#6ee7b7', font=get_font(FONT_BOLD_PATH, 14))
    draw.text((75, 655), "Cleaner signals train Meta's AI algorithm to find higher-LTV buyers.", fill='#ffffff', font=get_font(FONT_BOLD_PATH, 17))
    draw.text((75, 682), "Standard in every Astria & Co Growth Retainer package.", fill='#a7f3d0', font=get_font(FONT_REG_PATH, 15))

    img.save('public/images/insta/insta4.png')
    print("insta4.png created successfully")

create_post_1()
create_post_2()
create_post_3()
create_post_4()

