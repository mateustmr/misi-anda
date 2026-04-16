# Misi Anda — Build Plan

## Context

Misi Anda is a gamified sales performance app for Indosat retailers (warung operators, middle-to-low income). The core insight: retailers are passive, time-poor, and have limited cognitive bandwidth. Every design decision must reduce thinking, not add it. AI is used only where it clearly earns its place — surfacing the next best action at the right moment, always anchored in the retailer's own historical data.

---

## The 6 Ideas

### Already in Flow 01 (Home Screen)

**Idea 1 — Ranked Contacts in Send-Promo Sheet**
When a retailer opens "Kirim Promosi", contacts are sorted by likelihood to act today — not alphabetically. Each contact shows a small reason: "biasanya beli Jumat" or "belum top-up minggu ini." No new screen needed. The sheet already exists; we just make the list smarter.

**Idea 2 — AI Message Draft + Tone Chips**
Inside the same send-promo sheet, the WhatsApp message is pre-written by AI before the retailer touches anything. Below the draft, a row of tone chips: *Lebih Mendesak · Tambah Diskon · Lebih Santai · Bahasa Formal.* Tapping a chip rewrites the draft instantly. The retailer reviews and sends — zero writing required. Powered by Sahabat-AI (Indosat's own local-language model).

**Idea 3 — Earning Gap Calculator**
The coin target card on the home screen replaces the generic motivational copy with a specific, calculated prompt: "Butuh 4 penjualan data lagi — atau 2 top-up e-wallet." Same card, no new screen. The number is computed from the retailer's current gap and their average product margins.

**Idea 5 — Dynamic Streak Banner**
The streak banner at the top of the home screen has two states:
- **Healthy state:** "14 hari streak aktif! 1 hari lagi untuk cashback Rp 25.000"
- **At-risk state (shown by evening if no sale yet):** "Jual 1 produk lagi hari ini atau streak 14 harimu hilang." Loss aversion is one of the most reliable nudges in behavioral economics — framing as a loss is more motivating than framing as a gain.

---

### New Screen — Flow 04 (Upsell Moment)

**Idea 4 — Post-Transaction Upsell Card**
A screen that appears immediately after a successful top-up, while the customer is still standing at the counter. A single card slides up showing one recommended product ("Tawarkan paket data 15GB") with the estimated extra profit the retailer earns if the customer takes it ("estimasi untung Rp 2.000 lebih"). Two actions only: offer it, or skip. No navigation, no thinking. The AI picks the right product based on what was just purchased and what typically sells together.

---

### New Screen — Flow 02 (Transaction History / Insights)

**Idea 6 — Pelanggan Belum Balik**
A card at the top of the transaction history screen surfacing regular customers who haven't returned this week: "3 pelanggan tetapmu belum beli minggu ini." Tapping opens the send-promo sheet pre-loaded with those 3 contacts already selected. The retailer reaches out in 2 taps. Anchored entirely in historical purchase data — no prediction, no hallucination risk.

---

## AI Design Principles (from brief)

- **Suggest, don't decide.** AI surfaces options; the retailer always makes the final call.
- **Historical, not predictive.** Every AI statement is based on what already happened, never a guess about the future.
- **Narrow, specific task.** Each AI feature does exactly one thing well — rank contacts, draft a message, calculate a gap.
- **Earn its place.** If a feature doesn't clearly help the retailer make more money with less effort, it doesn't ship.

---

## Build Order

| Step | What | Screen | Effort |
|------|------|--------|--------|
| 1 | Dynamic streak banner + earning gap copy | Flow 01 | Low — same screen, new copy logic |
| 2 | Ranked contacts + AI draft + tone chips | Flow 01 send-promo sheet | Medium — new UI inside existing sheet |
| 3 | Post-transaction upsell card | Flow 04 (new) | Medium — new screen |
| 4 | Pelanggan belum balik card | Flow 02 (new) | Medium — new screen |

---

## Flow Inventory (Updated)

| Flow | Screen | Status |
|------|--------|--------|
| 01 | Home — saldo, coin target, product grid, send-promo sheet | Built — needs Step 1 & 2 updates |
| 02 | Transaction History + Pelanggan Belum Balik | To build |
| 03 | Mission & Programme | To build |
| 04 | Upsell Moment | To build |
