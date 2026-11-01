import os
from PIL import Image, ImageDraw, ImageFont

def get_font(name, size):
    windir = os.environ.get('WINDIR', 'C:\\Windows')
    font_path = os.path.join(windir, 'Fonts', name)
    if os.path.exists(font_path):
        return ImageFont.truetype(font_path, size)
    return ImageFont.load_default()

font_bold_xl = get_font('segoeuib.ttf', 44)
font_bold_lg = get_font('segoeuib.ttf', 32)
font_bold_md = get_font('segoeuib.ttf', 22)
font_bold_sm = get_font('segoeuib.ttf', 16)
font_bold_xs = get_font('segoeuib.ttf', 13)
font_reg_md = get_font('segoeui.ttf', 18)
font_reg_sm = get_font('segoeui.ttf', 14)
font_reg_xs = get_font('segoeui.ttf', 12)

W, H = 840, 540

def create_base_canvas(bg_top, bg_bottom, glow_color=(0, 102, 255)):
    # Create smooth gradient
    base = Image.new('RGB', (W, H), bg_top)
    draw = ImageDraw.Draw(base)
    for y in range(H):
        ratio = y / H
        r = int(bg_top[0] * (1 - ratio) + bg_bottom[0] * ratio)
        g = int(bg_top[1] * (1 - ratio) + bg_bottom[1] * ratio)
        b = int(bg_top[2] * (1 - ratio) + bg_bottom[2] * ratio)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # Grid overlay
    grid_img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid_img)
    grid_size = 40
    for x in range(0, W, grid_size):
        grid_draw.line([(x, 0), (x, H)], fill=(255, 255, 255, 8), width=1)
    for y in range(0, H, grid_size):
        grid_draw.line([(0, y), (W, y)], fill=(255, 255, 255, 8), width=1)

    # Glow in top right / center
    cx, cy, radius = 700, 80, 260
    for r in range(radius, 0, -6):
        alpha = int(24 * (1 - r / radius))
        grid_draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(glow_color[0], glow_color[1], glow_color[2], alpha))

    base = Image.alpha_composite(base.convert('RGBA'), grid_img)
    return base

# --- CARD 1: Meta Ads & D2C Scaling ---
def make_card_1():
    img = create_base_canvas((10, 16, 32), (5, 9, 20), (0, 102, 255))
    draw = ImageDraw.Draw(img)

    # Clean Top Header without any icon/pill
    draw.text((36, 36), "4.6x Blended ROAS", font=font_bold_xl, fill=(255, 255, 255, 255))
    draw.text((36, 90), "D2C Lifestyle & Fashion Brand  •  Meta Ads + High-Converting UGC Funnel", font=font_reg_sm, fill=(148, 163, 184, 255))

    # Inner Dashboard Card
    dash_x1, dash_y1, dash_x2, dash_y2 = 36, 130, W - 36, H - 36
    draw.rounded_rectangle([dash_x1, dash_y1, dash_x2, dash_y2], radius=18, fill=(15, 23, 42, 230), outline=(51, 65, 85, 180), width=1)

    # Metrics Row
    metrics = [
        ("TOTAL REVENUE", "₹11,50,000+", (52, 211, 153)),
        ("TOTAL AD SPEND", "₹2,50,000", (226, 232, 240)),
        ("PURCHASE ROAS", "4.60x", (56, 189, 248)),
        ("CAC REDUCTION", "-38.4%", (251, 146, 60)),
    ]
    col_w = (dash_x2 - dash_x1 - 32) / 4
    for i, (label, val, val_col) in enumerate(metrics):
        cx = dash_x1 + 24 + i * col_w
        draw.text((cx, dash_y1 + 20), label, font=font_bold_xs, fill=(100, 116, 139, 255))
        draw.text((cx, dash_y1 + 42), val, font=font_bold_md, fill=val_col + (255,))

    # Divider line
    draw.line([(dash_x1 + 20, dash_y1 + 84), (dash_x2 - 20, dash_y1 + 84)], fill=(30, 41, 59, 255), width=1)

    # Growth Chart
    chart_pts = [
        (dash_x1 + 40, dash_y2 - 40),
        (dash_x1 + 160, dash_y2 - 60),
        (dash_x1 + 290, dash_y2 - 95),
        (dash_x1 + 430, dash_y2 - 125),
        (dash_x1 + 570, dash_y2 - 180),
        (dash_x1 + 700, dash_y2 - 225),
    ]

    # Chart gradient fill
    poly_pts = [(dash_x1 + 40, dash_y2 - 35)] + chart_pts + [(dash_x1 + 700, dash_y2 - 35)]
    draw.polygon(poly_pts, fill=(0, 102, 255, 35))

    # Chart line
    for i in range(len(chart_pts) - 1):
        draw.line([chart_pts[i], chart_pts[i+1]], fill=(56, 189, 248, 255), width=3)
        draw.ellipse([chart_pts[i][0] - 4, chart_pts[i][1] - 4, chart_pts[i][0] + 4, chart_pts[i][1] + 4], fill=(56, 189, 248, 255), outline=(255, 255, 255, 255), width=2)
    last_pt = chart_pts[-1]
    draw.ellipse([last_pt[0] - 6, last_pt[1] - 6, last_pt[0] + 6, last_pt[1] + 6], fill=(52, 211, 153, 255), outline=(255, 255, 255, 255), width=2)

    # Chart labels
    draw.text((dash_x1 + 40, dash_y2 - 28), "Day 1: ₹12k/day", font=font_reg_xs, fill=(100, 116, 139, 255))
    draw.text((dash_x1 + 590, dash_y2 - 28), "Scale Peak: ₹95k/day", font=font_bold_xs, fill=(52, 211, 153, 255))

    return img.convert('RGB')

# --- CARD 2: SEO & Inbound Rankings ---
def make_card_2():
    img = create_base_canvas((15, 23, 42), (8, 14, 28), (14, 165, 233))
    draw = ImageDraw.Draw(img)

    # Clean Top Header without any icon/pill
    draw.text((36, 36), "+240% Inbound Leads", font=font_bold_xl, fill=(255, 255, 255, 255))
    draw.text((36, 90), "B2B Tech & Enterprise Services  •  Technical SEO + Editorial Authority", font=font_reg_sm, fill=(148, 163, 184, 255))

    # Inner Dashboard Card
    dash_x1, dash_y1, dash_x2, dash_y2 = 36, 130, W - 36, H - 36
    draw.rounded_rectangle([dash_x1, dash_y1, dash_x2, dash_y2], radius=18, fill=(15, 23, 42, 230), outline=(51, 65, 85, 180), width=1)

    # Metrics
    metrics = [
        ("ORGANIC TRAFFIC", "34,800/mo", (56, 189, 248)),
        ("KEYWORDS #1-#3", "24 High-Intent", (52, 211, 153)),
        ("SQLs GENERATED", "410 Leads", (226, 232, 240)),
        ("AD SPEND SAVED", "₹4,20,000", (251, 191, 36)),
    ]
    col_w = (dash_x2 - dash_x1 - 32) / 4
    for i, (label, val, val_col) in enumerate(metrics):
        cx = dash_x1 + 24 + i * col_w
        draw.text((cx, dash_y1 + 20), label, font=font_bold_xs, fill=(100, 116, 139, 255))
        draw.text((cx, dash_y1 + 42), val, font=font_bold_md, fill=val_col + (255,))

    draw.line([(dash_x1 + 20, dash_y1 + 84), (dash_x2 - 20, dash_y1 + 84)], fill=(30, 41, 59, 255), width=1)

    # Keyword Rankings table mockup
    kw_y = dash_y1 + 105
    keywords = [
        ("Keyword: \"enterprise b2b crm software\"", "Rank #1", "+14 spots", (52, 211, 153)),
        ("Keyword: \"cloud erp implementation india\"", "Rank #1", "+22 spots", (52, 211, 153)),
        ("Keyword: \"custom workflow automation\"", "Rank #2", "+18 spots", (56, 189, 248)),
        ("Keyword: \"performance b2b marketing\"", "Rank #1", "+19 spots", (52, 211, 153)),
    ]
    for kw, rank, delta, col in keywords:
        draw.rounded_rectangle([dash_x1 + 24, kw_y, dash_x2 - 24, kw_y + 44], radius=10, fill=(30, 41, 59, 140), outline=(51, 65, 85, 90), width=1)
        draw.text((dash_x1 + 42, kw_y + 13), kw, font=font_reg_sm, fill=(241, 245, 249, 255))
        draw.rounded_rectangle([dash_x2 - 200, kw_y + 9, dash_x2 - 120, kw_y + 35], radius=6, fill=col + (35,), outline=col + (150,), width=1)
        draw.text((dash_x2 - 188, kw_y + 12), rank, font=font_bold_xs, fill=col + (255,))
        draw.text((dash_x2 - 100, kw_y + 13), delta, font=font_bold_xs, fill=(148, 163, 184, 255))
        kw_y += 52

    return img.convert('RGB')

# --- CARD 3: Lead Gen Funnel & CPL ---
def make_card_3():
    img = create_base_canvas((18, 15, 38), (10, 8, 22), (168, 85, 247))
    draw = ImageDraw.Draw(img)

    # Clean Top Header without any icon/pill
    draw.text((36, 36), "3,200+ Qualified Leads", font=font_bold_xl, fill=(255, 255, 255, 255))
    draw.text((36, 90), "Healthcare Clinics & Real Estate  •  Meta Lead Forms + CRO Landing Page", font=font_reg_sm, fill=(148, 163, 184, 255))

    # Inner Dashboard Card
    dash_x1, dash_y1, dash_x2, dash_y2 = 36, 130, W - 36, H - 36
    draw.rounded_rectangle([dash_x1, dash_y1, dash_x2, dash_y2], radius=18, fill=(15, 23, 42, 230), outline=(51, 65, 85, 180), width=1)

    # Metrics
    metrics = [
        ("INITIAL CPL", "₹345 / Lead", (248, 113, 113)),
        ("OPTIMIZED CPL", "₹110 / Lead", (52, 211, 153)),
        ("CONVERSION RATE", "14.2%", (56, 189, 248)),
        ("TOTAL PIPELINE", "₹42,00,000+", (216, 180, 254)),
    ]
    col_w = (dash_x2 - dash_x1 - 32) / 4
    for i, (label, val, val_col) in enumerate(metrics):
        cx = dash_x1 + 24 + i * col_w
        draw.text((cx, dash_y1 + 20), label, font=font_bold_xs, fill=(100, 116, 139, 255))
        draw.text((cx, dash_y1 + 42), val, font=font_bold_md, fill=val_col + (255,))

    draw.line([(dash_x1 + 20, dash_y1 + 84), (dash_x2 - 20, dash_y1 + 84)], fill=(30, 41, 59, 255), width=1)

    # Funnel visual bars
    funnel_y = dash_y1 + 105
    funnel_steps = [
        ("1. Ad Impressions & Clicks (Meta & IG)", "24,800 Clicks", 0.95, (99, 102, 241)),
        ("2. Interactive Qualification Page", "12,400 Visitors", 0.65, (168, 85, 247)),
        ("3. Verified OTP & WhatsApp Leads", "3,200 Verified Leads", 0.40, (52, 211, 153)),
    ]
    for step_title, count, pct, bar_col in funnel_steps:
        draw.text((dash_x1 + 24, funnel_y), step_title, font=font_reg_xs, fill=(203, 213, 225, 255))
        draw.text((dash_x2 - 170, funnel_y), count, font=font_bold_xs, fill=bar_col + (255,))
        # background bar
        bar_bg_w = dash_x2 - dash_x1 - 48
        draw.rounded_rectangle([dash_x1 + 24, funnel_y + 20, dash_x2 - 24, funnel_y + 30], radius=5, fill=(30, 41, 59, 255))
        # filled bar
        fill_w = int(bar_bg_w * pct)
        draw.rounded_rectangle([dash_x1 + 24, funnel_y + 20, dash_x1 + 24 + fill_w, funnel_y + 30], radius=5, fill=bar_col + (255,))
        funnel_y += 56

    return img.convert('RGB')

# --- CARD 4: Google Ads + WhatsApp Automation ---
def make_card_4():
    img = create_base_canvas((6, 24, 38), (3, 14, 24), (34, 197, 94))
    draw = ImageDraw.Draw(img)

    # Clean Top Header without any icon/pill
    draw.text((36, 36), "₹18,00,000+ Closed Revenue", font=font_bold_xl, fill=(255, 255, 255, 255))
    draw.text((36, 90), "High-Ticket Consulting & Real Estate  •  Google Search Intent + 60s WhatsApp Bot", font=font_reg_sm, fill=(148, 163, 184, 255))

    # Inner Dashboard Card
    dash_x1, dash_y1, dash_x2, dash_y2 = 36, 130, W - 36, H - 36
    draw.rounded_rectangle([dash_x1, dash_y1, dash_x2, dash_y2], radius=18, fill=(15, 23, 42, 230), outline=(51, 65, 85, 180), width=1)

    # Metrics
    metrics = [
        ("RESPONSE TIME", "< 60 Seconds", (52, 211, 153)),
        ("CONSULTATION BOOKING", "38.2%", (56, 189, 248)),
        ("CLOSED DEAL VALUE", "₹18,40,000", (251, 191, 36)),
        ("RETURN ON AD SPEND", "6.2x", (167, 139, 250)),
    ]
    col_w = (dash_x2 - dash_x1 - 32) / 4
    for i, (label, val, val_col) in enumerate(metrics):
        cx = dash_x1 + 24 + i * col_w
        draw.text((cx, dash_y1 + 20), label, font=font_bold_xs, fill=(100, 116, 139, 255))
        draw.text((cx, dash_y1 + 42), val, font=font_bold_md, fill=val_col + (255,))

    draw.line([(dash_x1 + 20, dash_y1 + 84), (dash_x2 - 20, dash_y1 + 84)], fill=(30, 41, 59, 255), width=1)

    # Workflow automation visualization
    step_y = dash_y1 + 105
    steps = [
        ("1. Google Search Query", "High-Intent Keyword Match: 'best commercial advisor'", (56, 189, 248)),
        ("2. Instant WhatsApp Trigger", "Automated custom greeting + brochure in 45 seconds", (52, 211, 153)),
        ("3. One-Click Calendar Booking", "38% automated demo booking with zero manual sales friction", (251, 191, 36)),
    ]
    for title, desc, icon_col in steps:
        draw.rounded_rectangle([dash_x1 + 24, step_y, dash_x2 - 24, step_y + 44], radius=10, fill=(30, 41, 59, 140), outline=(51, 65, 85, 90), width=1)
        draw.ellipse([dash_x1 + 38, step_y + 18, dash_x1 + 46, step_y + 26], fill=icon_col + (255,))
        draw.text((dash_x1 + 60, step_y + 12), title, font=font_bold_xs, fill=(241, 245, 249, 255))
        draw.text((dash_x1 + 280, step_y + 13), desc, font=font_reg_xs, fill=(148, 163, 184, 255))
        step_y += 52

    return img.convert('RGB')

# Save all
out_dir = os.path.join('public', 'images', 'featured')
os.makedirs(out_dir, exist_ok=True)

c1 = make_card_1()
c1.save(os.path.join(out_dir, 'case-meta-d2c.png'), quality=95)
print('Saved case-meta-d2c.png')

c2 = make_card_2()
c2.save(os.path.join(out_dir, 'case-seo-growth.png'), quality=95)
print('Saved case-seo-growth.png')

c3 = make_card_3()
c3.save(os.path.join(out_dir, 'case-lead-gen.png'), quality=95)
print('Saved case-lead-gen.png')

c4 = make_card_4()
c4.save(os.path.join(out_dir, 'case-google-whatsapp.png'), quality=95)
print('Saved case-google-whatsapp.png')
