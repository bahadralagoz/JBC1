# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Design first. The user chose to build a working storefront design/prototype now and decide the selling infrastructure (payments, shipping, stock, invoicing) later. Shopify, ikas or a custom Next.js build were offered; none is chosen yet. Build the prototype as static HTML/CSS/JS so it can later be ported into whichever platform is chosen.

## Users

Men buying everyday casualwear online in Turkey, today through Trendyol. Age and style segment are not yet confirmed; the catalogue (oversize fleece sweatshirts, hoodies, tracksuits, oversize printed tees, basic tees, stretch shorts) and Trendyol price points (399,90 TL to 1.999,90 TL) are the evidence.

## Product Purpose

JBC is a newly founded Turkish clothing brand that designs, produces and sells its own menswear. Today it sells only through e-commerce marketplaces (Trendyol store: https://www.trendyol.com/sr?mid=1027483&os=1). The website exists to give JBC its own brand home and, later, its own direct sales channel, with a modern, innovative, attention-grabbing presence instead of a marketplace listing.

## Positioning

Undecided. What makes JBC different from neighbouring menswear brands (fabric, fit, production, price, attitude) has not been stated yet. Do not invent one.

## Operating Context

- Customers currently discover and buy JBC on Trendyol; the site must make sense to someone arriving from there.
- Turkish-language storefront; prices in TRY when shown.
- Selling flow (cart, checkout) is designed now but not wired to a real backend.

## Capabilities and Constraints

- Catalogue (from the supplied Trendyol export, `products.js`): Oversize Şardonlu Sweatshirt (7 colourways), Eşofman Takımı (5), Nakışlı Kapüşonlu (1), Kabarmalı Kadife Baskı Oversize Tişört (3), %100 Pamuk Tişört (2), Big Stretch Spor Şort (3).
- The user mentioned polo shirts, but none are in the export, so none are shown.
- The Trendyol store also lists two women's items (crop halter atlet). The user said the brand is menswear only, so they are left off the site.
- Size availability, fabric weights and measurements are not in the export and are still to be supplied.

## Brand Commitments

- Name: JBC.
- The user named Tudors (Turkish menswear brand) as a reference for the kind of site they want. Its site could not be opened from this environment, so the reference is recorded as the user's benchmark for category and ambition, not as a design to copy.

## Evidence on Hand

- Product photography: JBC's own Trendyol studio photos, cut out to transparent WebP in `assets/products/<trendyol-id>.webp` (origin embedded in each file).
- Prices and ratings: Trendyol sale prices and Trendyol review scores from the export (JBC_Trendyol_Urun_Listesi.xlsx). Ratings are shown as Trendyol ratings, unfiltered.
- Logo: the user has one, but it is not in the repository yet; the site uses a typeset "JBC" wordmark until it arrives.
- No testimonials, press, sales figures or certifications are on hand. Do not fabricate them.

## Product Principles

1. The brand home must feel like JBC's own world, not a marketplace listing.
2. Products are the proof: real photography and real product facts lead, claims follow only when true.
3. Built to port: the design must survive being moved onto a commerce platform later.
