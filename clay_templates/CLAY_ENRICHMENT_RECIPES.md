# Clay.com B2B Enrichment Recipes (StoreIntel Labs Apify Actors)

Use these 8 copy-paste recipes inside **Clay.com** (`Add Enrichment` -> `Apify: Run Actor` or `HTTP API`) to enrich thousands of domains, SaaS apps, job boards, Skool communities, Y Combinator startups, and Substack newsletters at `$0.0009–$0.0030` per record.

---

## 1. [Shopify & WooCommerce Scraper: Products, Stock & Store Leads](https://apify.com/storeintel/ecommerce-store-intelligence-scraper)
- **Apify Actor Slug:** `storeintel/ecommerce-store-intelligence-scraper` (ID: `a1BKnEAMDeA1CBwIn`)
- **Apify Store Page:** https://apify.com/storeintel/ecommerce-store-intelligence-scraper
- **HTTP API Endpoint (Sync JSON):** `POST https://api.apify.com/v2/acts/storeintel~ecommerce-store-intelligence-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN`

### Clay Input JSON Body (Copy & Paste into Clay Apify Column):
```json
{
  "domains": [
    "{{Store Domain}}"
  ],
  "scrapeProducts": true,
  "maxProductsPerStore": 20,
  "includeExactInventory": true,
  "includeStoreLeadProfile": true,
  "includeReviews": false
}
```

###Specialized Pre-Built Apify Tasks:
- [Shopify Store Email, Tech Stack & Exact Inventory Scraper](https://apify.com/storeintel/shopify-store-email-tech-stack-exact-inventory-scraper)
- [WooCommerce & Shopify Product Price & Discount Scraper](https://apify.com/storeintel/woocommerce-product-price-inventory-scraper)
- [Shopify Judge.me, Okendo & Yotpo Product Reviews Scraper](https://apify.com/storeintel/shopify-judgeme-loox-yotpo-reviews-scraper)

---

## 2. [Shopify App Store Scraper: Apps, Pricing, Developer Leads & 1-Star Reviews](https://apify.com/storeintel/shopify-app-store-scraper)
- **Apify Actor Slug:** `storeintel/shopify-app-store-scraper` (ID: `jun7NukPGv4xmLJMg`)
- **Apify Store Page:** https://apify.com/storeintel/shopify-app-store-scraper
- **HTTP API Endpoint (Sync JSON):** `POST https://api.apify.com/v2/acts/storeintel~shopify-app-store-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN`

### Clay Input JSON Body (Copy & Paste into Clay Apify Column):
```json
{
  "appHandlesOrUrls": [
    "{{Shopify App URL or Handle}}"
  ],
  "scrapeAppProfiles": true,
  "scrapeReviews": true,
  "maxReviewsPerApp": 30,
  "reviewRatingFilter": 1,
  "reviewSortBy": "newest"
}
```

###Specialized Pre-Built Apify Tasks:
- [Shopify App 1-Star Reviews & Competitor Churn Leads Scraper](https://apify.com/storeintel/shopify-app-1-star-churn-leads-scraper)
- [Shopify App Developer Emails, Pricing Plans & SaaS Leads Scraper](https://apify.com/storeintel/shopify-app-developer-email-pricing-scraper)
- [Shopify App Store Category Ranking & Keyword Discovery Scraper](https://apify.com/storeintel/shopify-category-competitor-ranking-scraper)

---

## 3. [Chrome Web Store Scraper: Extensions, Trader Emails, Manifest & Reviews](https://apify.com/storeintel/chrome-web-store-scraper)
- **Apify Actor Slug:** `storeintel/chrome-web-store-scraper` (ID: `29JI2nK22H6vnbaD8`)
- **Apify Store Page:** https://apify.com/storeintel/chrome-web-store-scraper
- **HTTP API Endpoint (Sync JSON):** `POST https://api.apify.com/v2/acts/storeintel~chrome-web-store-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN`

### Clay Input JSON Body (Copy & Paste into Clay Apify Column):
```json
{
  "extensionUrlsOrIds": [
    "{{Chrome Extension URL or ID}}"
  ],
  "scrapeExtensionProfiles": true,
  "scrapeReviews": true,
  "maxReviewsPerExtension": 20
}
```

###Specialized Pre-Built Apify Tasks:
- [Chrome Extension Developer Email, Trader Address & SaaS Leads Scraper](https://apify.com/storeintel/chrome-extension-developer-email-trader-lead-scraper)
- [Chrome Extension User Reviews, Bug Reports & Churn Leads Scraper](https://apify.com/storeintel/chrome-extension-reviews-bug-churn-scraper)
- [Chrome Extension Manifest V3 Permissions & Security Auditor](https://apify.com/storeintel/chrome-extension-manifest-permissions-security-auditor)

---

## 4. [WordPress Plugin Directory Scraper: Active Installs, Support & Reviews](https://apify.com/storeintel/wordpress-plugin-directory-scraper)
- **Apify Actor Slug:** `storeintel/wordpress-plugin-directory-scraper` (ID: `0EbRXhj52ssBU1Rf7`)
- **Apify Store Page:** https://apify.com/storeintel/wordpress-plugin-directory-scraper
- **HTTP API Endpoint (Sync JSON):** `POST https://api.apify.com/v2/acts/storeintel~wordpress-plugin-directory-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN`

### Clay Input JSON Body (Copy & Paste into Clay Apify Column):
```json
{
  "pluginSlugsOrUrls": [
    "{{WordPress Plugin Slug}}"
  ],
  "scrapePluginProfiles": true,
  "scrapeReviews": true,
  "maxReviewsPerPlugin": 20,
  "reviewRatingFilter": 1
}
```

###Specialized Pre-Built Apify Tasks:
- [WooCommerce & WordPress Plugin Active Installs & Developer Leads Scraper](https://apify.com/storeintel/woocommerce-plugin-active-installs-leads-scraper)
- [WordPress Plugin 1-Star Reviews & Competitor Churn Scraper](https://apify.com/storeintel/wordpress-plugin-1-star-reviews-churn-scraper)
- [Abandoned WordPress Plugins & Unresolved Support Threads Finder](https://apify.com/storeintel/wordpress-abandoned-plugin-unresolved-support-finder)

---

## 5. [Greenhouse, Lever & Ashby ATS Jobs Scraper: Salaries & B2B Tech Stack Signals](https://apify.com/storeintel/greenhouse-lever-ashby-jobs-scraper)
- **Apify Actor Slug:** `storeintel/greenhouse-lever-ashby-jobs-scraper` (ID: `b299QmfDV8Zcrcn2B`)
- **Apify Store Page:** https://apify.com/storeintel/greenhouse-lever-ashby-jobs-scraper
- **HTTP API Endpoint (Sync JSON):** `POST https://api.apify.com/v2/acts/storeintel~greenhouse-lever-ashby-jobs-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN`

### Clay Input JSON Body (Copy & Paste into Clay Apify Column):
```json
{
  "companyTargets": [
    "{{Company ATS URL or Slug}}"
  ],
  "maxJobsPerCompany": 25,
  "includeCompanySummary": true,
  "keywordFilter": "",
  "remoteOnly": false
}
```

###Specialized Pre-Built Apify Tasks:
- [Greenhouse Job Board, Salaries & Tech Stack Scraper](https://apify.com/storeintel/greenhouse-job-board-salaries-tech-stack-scraper)
- [Ashby & Lever Startup Jobs & Hiring Signals Scraper](https://apify.com/storeintel/ashby-lever-startup-jobs-hiring-signals-scraper)
- [B2B Company Tech Stack & Hiring Velocity Detector](https://apify.com/storeintel/b2b-company-tech-stack-hiring-velocity-detector)

---

## 6. [Skool Community & Creator Leads Scraper: Estimated MRR, Pricing & Socials](https://apify.com/storeintel/skool-community-creator-leads-scraper)
- **Apify Actor Slug:** `storeintel/skool-community-creator-leads-scraper` (ID: `PbXz3nAsQS4EKDwd2`)
- **Apify Store Page:** https://apify.com/storeintel/skool-community-creator-leads-scraper
- **HTTP API Endpoint (Sync JSON):** `POST https://api.apify.com/v2/acts/storeintel~skool-community-creator-leads-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN`

### Clay Input JSON Body (Copy & Paste into Clay Apify Column):
```json
{
  "groupSlugsOrUrls": [
    "{{Skool Community URL or Slug}}"
  ],
  "searchQueries": [],
  "enrichCreatorSocials": true,
  "onlyPaidCommunities": false,
  "minEstimatedMrrUsd": 0
}
```

###Specialized Pre-Built Apify Tasks:
- [Skool Paid Community MRR & Pricing Calculator Scraper](https://apify.com/storeintel/skool-paid-community-mrr-revenue-calculator-scraper)
- [Skool Creator Instagram, YouTube & Social Leads Scraper](https://apify.com/storeintel/skool-creator-instagram-youtube-email-leads-scraper)
- [Skool High-Commission Affiliate Communities Finder](https://apify.com/storeintel/skool-affiliate-program-high-ticket-courses-finder)

---

## 7. [Y Combinator (YC) Startups & Founders Scraper: LinkedIn, X & Batch Data](https://apify.com/storeintel/y-combinator-startups-founders-scraper)
- **Apify Actor Slug:** `storeintel/y-combinator-startups-founders-scraper` (ID: `ixaK57YRKe7tj1q3y`)
- **Apify Store Page:** https://apify.com/storeintel/y-combinator-startups-founders-scraper
- **HTTP API Endpoint (Sync JSON):** `POST https://api.apify.com/v2/acts/storeintel~y-combinator-startups-founders-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN`

### Clay Input JSON Body (Copy & Paste into Clay Apify Column):
```json
{
  "companySlugsOrUrls": [
    "{{YC Company Slug or URL}}"
  ],
  "emitIndividualFounderLeads": true
}
```

###Specialized Pre-Built Apify Tasks:
- [YC Founder LinkedIn & X/Twitter B2B Leads Scraper](https://apify.com/storeintel/yc-founder-linkedin-twitter-b2b-leads-scraper)
- [Y Combinator AI Startups & Batch Directory Scraper](https://apify.com/storeintel/y-combinator-w24-s24-ai-startups-directory-scraper)
- [YC Startup Team Size, Website & Socials Scraper](https://apify.com/storeintel/yc-startup-team-size-hiring-status-scraper)

---

## 8. [Substack Newsletter Leads, Authors & Posts Scraper: Engagement & Sponsorship Data](https://apify.com/storeintel/substack-newsletter-leads-posts-scraper)
- **Apify Actor Slug:** `storeintel/substack-newsletter-leads-posts-scraper` (ID: `dSOldJQGTbikEda10`)
- **Apify Store Page:** https://apify.com/storeintel/substack-newsletter-leads-posts-scraper
- **HTTP API Endpoint (Sync JSON):** `POST https://api.apify.com/v2/acts/storeintel~substack-newsletter-leads-posts-scraper/run-sync-get-dataset-items?token=YOUR_APIFY_TOKEN`

### Clay Input JSON Body (Copy & Paste into Clay Apify Column):
```json
{
  "publicationTargets": [
    "{{Substack Subdomain or Domain}}"
  ],
  "scrapePublicationProfiles": true,
  "scrapePosts": true,
  "maxPostsPerPublication": 10,
  "postSortBy": "top"
}
```

###Specialized Pre-Built Apify Tasks:
- [Substack Newsletter B2B Sponsorship Leads Scraper](https://apify.com/storeintel/substack-newsletter-b2b-sponsorship-leads-scraper)
- [Substack Posts, Reactions & Engagement Scraper](https://apify.com/storeintel/substack-top-posts-engagement-metrics-scraper)
- [Substack Paid Newsletter Authors & Socials Scraper](https://apify.com/storeintel/substack-paid-newsletter-authors-twitter-scraper)

---
