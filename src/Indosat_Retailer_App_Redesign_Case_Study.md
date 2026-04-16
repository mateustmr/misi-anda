## Why this, why now?

Indonesia's digital economy is still growing massively:
* Digital payments will grow from USD 115B (2025) to USD 250B (2030), while ecommerce from USD 94.5B to USD 194B.
* **Opportunity:** PPOB remains a high-margin, recurring-revenue business. Warung operators need simple tools to earn more from the transactions already flowing through their counters.

At the same time, AI is booming. Global AI market reaches USD 1.2-1.8 trillion by 2030, and Indonesia's consumer AI segment alone will hit USD 11-12 billion. Indosat is positioned to capture it. The company has committed to becoming an AI-native telco, building sovereign AI data centers, and embedding local-language LLMs (Sahabat-AI) across enterprise and retail use cases.

Embedding AI into Indosat's core product could be an obvious move. But, researches on AI has increasingly shown negative consequences of AI, and reckless AI implementation may end up eroding consumer's trust.

**The question then:** How would we implement AI properly into Indosat's line of business (e.g., PPOB through RITA and SIMPEL) to support company's north star mission, without confusing its current users?

---

## Life of the Retailers

### 1. Has Limited Bandwidth Capacity
* Coming from middle-to-low income class, retailers typically have limited cognitive bandwidth due to 'bandwidth tax', because they juggle inventory, suppliers, and cash daily, on top of their daily household tasks.
* Research on scarcity shows this "bandwidth tax" forces short-term thinking, instant gratification and missed opportunities. Making them unable to handle complex, novel things.
* **Main goal:** Make more money, with less effort.

### 2. Retailers operate in passive mode
* Mainly passive selling (location-bound, wait for buyers to come to their stalls / no outreach).
* Don't upsell digital products after successful purchase.
* Wait for salespersons for troubleshooting, purchasing physical vouchers, or getting updates on new promo programmes.

### 3. Value Driven
* Switching between several PPOB platforms to look for cheapest products options to sell.
* Know what product sells the most.
* This shows that retailers look for maximizing profit, but only if it's easy.

**Opportunity:** How might we design a system that makes retailers proactively grow revenue, without adding complexity to their day?

---

## The opportunity: AI (LLM) as Smart Assistant

### Why AI?
Aligned with Indosat's goal.

### What AI good at?
* **Pattern recognition:** identifying trends and synthesizing information from large datasets. Useful for analysing sales pattern.
* **Personalization:** Tailor recommendations to individual retailer behavior and local market context.
* **Local language generation:** Sahabat-AI can generate Bahasa Indonesia message templates for WhatsApp outreach.

### What AI bad at?
* Hallucination. Accuracy on domain-specific constraints (e.g., regional margin caps, fraud signals). LLMs hallucinate facts and structural transaction data, exact margins.
* Complex step-by-step reasoning or multi-step logic and regulatory edge cases and exceptions.

### Implication:
* **Suggest, Don't Decide:** Never allow AI to make decision for retailers. Instead, show retailers best available options.
* **Narrow, Specific Task:** AI is still unable to handle multiple, diverse tasks. So focus on specific task that bring the best value.
* **Historical, not predictive:** Always force AI to make statement based on historical data.

---

## Opportunity: From passive to proactive selling
How might we design an AI-powered system that makes retailers proactively grow revenue, without adding complexity to their day?

* **Main goal:** Make more money, with less effort.

**Key jobs (JTBD) for Indosat retailers:**
1. "Help me know what I'm really earning and from which products."
2. "Tell me exactly what to push today to hit my income target."
3. "Remind me at the right moment, because I will forget."

**Smart Nudge System** **Design hypothesis:** Designing on-point nudge system that surface the next best action at the right moment, turning passive routines into small, repeated growth behaviours.

---

## Slide 4 - Design principles
### Design for fast, profitable actions under low attention

* **Familiar first.** Keep navigation and mental model close to today's app to avoid extra cognitive load; nudges should sit on top of existing flows, not require new training. Scarcity research warns against "taxing" bandwidth with complex services.
* **Couple new behaviour to existing behaviour.** Trigger nudges immediately after key actions (e.g., top-up success) so the next step feels like a natural continuation, consistent with nudge theory's focus on choice architecture.
* **Immediate financial overview.** Put revenue, margins, and progress to goal on the home screen so retailers can see, in one glance, where money comes from and what to do next.
* **Assistive selling maximiser.** Use AI only where it clearly helps: prioritising which product to upsell, who to message, or which goal to pursue, always framed in "extra income you can earn", not in abstract scores.

---

## Smart nudges anchored in real moments

* **After successful purchase/top-up:** Show a simple upsell card such as: "Top-up success. Offer e-wallet top-up to earn an estimated extra Rp X today."
* **During daily review:** When retailers check saldo or transaction history, show insights like "You sold fewer data packages this week; forward this promo to reach your target."
* **Sharing and poke:** Make it one tap to forward pre-written offers to WhatsApp groups or key customers, turning nudges into concrete outreach rather than passive information.

**Evidence to reference:** Bank experiments that embedded nudges into application flows increased savings account openings by roughly 20-40% versus control groups, showing that small, well-timed changes in choice architecture can move financial behaviour at meaningful scale.

---

## Slide 6 - Home page
**Title:** Home: one place for money and momentum

**Suggested content for the slide:**
* **Top section - "Today's business snapshot":**
  * Saldo and incoming cash today.
  * Simple "Revenue vs last week" indicator.
* **Middle - "Goals & progress":**
  * Clear monthly revenue target, with a simple progress bar and "Rp X left to reach your goal".
* **Bottom - "Next best actions":**
  * 2-3 ranked nudges, e.g., "Push data package A" or "Remind high-value customers", each with an estimated additional profit.

**Link back to theory:** JTBD framing ensures the home page is not a feature dump but a control panel for the retailer's core job of "earning more, with less thinking."

---

## Slide 7 - Upsell moments
**Title:** Upsell: attach one more product, automatically

* Triggered right after top-up or bill payment confirmation, when the customer is still present.
* **Example microcopy:** "Top-up success. Offer e-wallet top-up now and earn ~Rp 2,000 more profit on this customer."
* This uses Thaler and Sunstein's idea of a nudge: a small, context-specific suggestion that changes behaviour predictably without removing options or forcing action.

**Intended behavioural shift:** Move from single-product transactions to simple "attach" behaviour, one extra product at a time.

---

## Slide 8 - Transaction insights and messaging
**Title:** Insights that turn into action, not reports

* **Weekly pattern detection:** "Your data package sales are 15% lower than last week; send this offer to your regular buyers."
* **One-tap WhatsApp broadcast** with pre-written copy and simple tracking (e.g., "You sent this to 30 customers; 6 bought, Rp X extra profit").
* This design respects bandwidth constraints by turning analytics into a single recommended action, rather than dashboards that require interpretation.

**Supporting evidence:** Meta-analyses of choice-architecture interventions across 200+ studies find that nudges have a reliable small-to-medium effect on behaviour, meaning recurring micro-nudges can cumulatively drive meaningful outcomes.

---

## Slide 9 – Rewards and goals
**Title:** Rewards that reinforce the right behaviour

* Frame rewards directly in business outcomes: "Sell 10 more data packages this week to unlock Rp X extra profit plus Y bonus points."
* Make goal progress visible in the home page and in each nudge, so effort and reward are tightly linked.
* Incentive design aligns with nudge theory findings that small, well-targeted incentives (points, recognition, or small bonuses) can meaningfully influence behaviour without large subsidies.

**Why this is conservative:** Industry experiments show even simple nudges can increase uptake or conversion by 20-40%; we treat a 10-20% revenue uplift per targeted flow as a realistic, if cautious, working assumption rather than a promise.

---

## Slide 10 - Expected impact
**Title:** Business case: small nudges, large base

* Mitra Bukalapak's O2O platform shows what's possible: warung owners using the platform have reported up to 3x income increases, and Mitra Bukalapak now contributes around 46% of Bukalapak's total processing value across 16.8 million small businesses, with 42+ virtual and financial products.
* Indosat's PPOB base is smaller but similar in nature: a large network of micro-entrepreneurs handling recurring digital payments with thin margins and limited tools.
* If nudges and better financial visibility can unlock even a modest uplift per retailer (e.g., 10-20% higher revenue on targeted categories), the aggregate impact on Indosat's transaction volume and fee income is material given the national growth of digital payments.

**Positioning sentence:** "We are not betting on a moonshot feature, but on systematic, evidence-based improvements at the moments that already exist in every transaction."

---

## Slide 11 - Beyond location: what's next
**Title:** Beyond location: a connected growth platform

* Today, many retailers think of Indosat as "the PPOB app I use at my counter."
* The redesign positions it as "the partner that actively helps me grow revenue, wherever my customers are."
* Future extensions can connect nudges with other Indosat assets (e.g., targeted campaigns, BNPL, or partner services) once we validate uplift and retailer trust in the core flows.
* Fintech extensions such as BNPL in Indonesia are already projected to grow strongly, indicating room for additional financial services once fundamentals are proven.

**Close with your quote:** *"Building has become easy; the hard part is deciding what to build and why. Every new feature must earn its place by proving impact on retailer income and Indosat revenue."*

---

## Thank you
**Get in touch:**
* LinkedIn: @mateustmr
* Email: mateus@mateustmr.com
