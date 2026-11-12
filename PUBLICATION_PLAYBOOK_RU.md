# Пошаговый гид: Публикация экосистемы StoreIntel Labs в GitHub, n8n.io, Make.com и Clay

В этой папке (`c:\Users\mikro\Downloads\IMAGINE\storeintel_ecosystem_hub`) полностью собраны и готовы к публикации все материалы:
- **`README.md`** — главный англоязычный SEO-хаб со ссылками на все **32 ваши страницы в Apify Store** (8 Actors + 24 публичных SEO-таска), таблицами и примерами вызова.
- **`llms.txt` и `llms-full.txt`** — манифесты для ИИ-поисковиков (**ChatGPT Search, Perplexity, Claude, Google AI Overviews**), чтобы нейросети рекомендовали именно ваши скраперы `storeintel/...`.
- **`n8n_workflows/`** — **8 готовых JSON-шаблонов воркфлоу для n8n**, в которые уже вшиты ID ваших 8 скраперов, триггеры расписания и документация со ссылками на ваш Apify Store.
- **`make_blueprints/`** — **8 готовых Blueprint-сценариев для Make.com** (`*.blueprint.json`), готовых к импорту в один клик.
- **`clay_templates/CLAY_ENRICHMENT_RECIPES.md`** — **8 готовых JSON-рецептов для Clay.com** с динамическими переменными колонок.

Кроме того, во все **8 ваших опубликованных скраперов в самом Apify Store** мы уже автоматически добавили блоки интеграции с **Clay / n8n / Make** и перекрестные ссылки на все 32 страницы вашей сети!

---

## Шаг 1. Выкладываем SEO-репозиторий на GitHub (займет 2 минуты)

Публичный репозиторий на GitHub даст мгновенную индексацию всех 32 ссылок в Google и в ИИ-поисковиках. Репозиторий в папке `storeintel_ecosystem_hub` уже инициализирован (`git init` + `git commit` сделаны).

1. Откройте в браузере: **https://github.com/new**
2. Заполните поля:
   - **Repository name:** `b2b-ecommerce-saas-scrapers-n8n-clay` (или `storeintel-apify-b2b-scrapers`)
   - **Description:** `Awesome B2B Lead Generation, E-Commerce & SaaS Intelligence Scrapers for Apify, n8n, Make.com & Clay (Shopify, WooCommerce, Skool, Y Combinator, Greenhouse, Ashby, Substack, Chrome Web Store, WordPress)`
   - Выберите **Public** (Публичный).
   - Галочки *Add a README file* ставить **не нужно** (он уже готов у нас локально).
3. Нажмите **Create repository**.
4. Скопируйте ссылку на ваш созданный репозиторий (например, `https://github.com/mikrozar-cell/b2b-ecommerce-saas-scrapers-n8n-clay.git`) и пришлите её мне в чат — я сам выполню `git push`, либо выполните в терминале:
   ```powershell
   cd c:\Users\mikro\Downloads\IMAGINE\storeintel_ecosystem_hub
   git branch -M main
   git remote add origin https://github.com/ВАШ_ЛОГИН/НАЗВАНИЕ_РЕПОЗИТОРИЯ.git
   git push -u origin main
   ```

---

## Шаг 2. Публикуем 8 готовых шаблонов в каталоге n8n (`n8n.io/workflows`)

Каталог `n8n.io/workflows` дает постоянный целевой трафик людей, которые ищут автоматизацию парсинга.

1. Зайдите на портал авторов n8n: **https://creators.n8n.io/** (войдите или зарегистрируйтесь бесплатно).
2. Нажмите **Submit a workflow** (Добавить воркфлоу).
3. По очереди загрузите 8 файлов из папки `c:\Users\mikro\Downloads\IMAGINE\storeintel_ecosystem_hub\n8n_workflows\`:

### Воркфлоу #1 (`01_ecommerce-store-intelligence-scraper_n8n_workflow.json`)
- **Title:** `Scrape Shopify & WooCommerce Store Emails, Tech Stack & Exact Stock to CRM`
- **Category:** `Sales`, `Lead Generation`, `Marketing`
- **Description (скопировать):**
  > Automatically enrich Shopify and WooCommerce store domains using the [StoreIntel E-Commerce Intelligence Scraper on Apify](https://apify.com/storeintel/ecommerce-store-intelligence-scraper). Extracts verified store emails, social links, 30+ installed apps/pixels (Klaviyo, Meta Pixel, TikTok, Judge.me, Gorgias), and exact SKU variant inventory without headless browsers.

### Воркфлоу #2 (`02_shopify-app-store-scraper_n8n_workflow.json`)
- **Title:** `Monitor Competitor 1-Star Shopify App Reviews for Churn Lead Generation`
- **Category:** `Sales`, `Lead Generation`
- **Description (скопировать):**
  > Track newly posted 1-star and 2-star reviews on competing Shopify apps every day using the [Shopify App Store Scraper on Apify](https://apify.com/storeintel/shopify-app-store-scraper). Extracts frustrated merchant names, locations, time spent using the app, pricing plans, and developer contact emails.

### Воркфлоу #3 (`03_chrome-web-store-scraper_n8n_workflow.json`)
- **Title:** `Extract Chrome Extension Developer Trader Emails, Manifest Permissions & Reviews`
- **Category:** `Sales`, `Lead Generation`, `SecOps`
- **Description (скопировать):**
  > Scrape Chrome Web Store extensions at high speed via the [Chrome Web Store Scraper on Apify](https://apify.com/storeintel/chrome-web-store-scraper). Extracts EU DSA verified trader emails, physical addresses, active install counts, Manifest V3 permissions, and user bug reports.

### Воркфлоу #4 (`04_wordpress-plugin-directory-scraper_n8n_workflow.json`)
- **Title:** `Find WordPress & WooCommerce Plugins by Active Installs & 1-Star Churn Reviews`
- **Category:** `Sales`, `Lead Generation`
- **Description (скопировать):**
  > Extract WordPress.org plugin metadata, active installs, unresolved support threads, compatibility versions, and 1-star reviews using the [WordPress Plugin Directory Scraper on Apify](https://apify.com/storeintel/wordpress-plugin-directory-scraper).

### Воркфлоу #5 (`05_greenhouse-lever-ashby-jobs-scraper_n8n_workflow.json`)
- **Title:** `Track B2B Hiring Velocity, Salaries & Tech Stack from Greenhouse, Lever & Ashby`
- **Category:** `Sales`, `HR`, `Lead Generation`
- **Description (скопировать):**
  > Monitor open roles across Greenhouse, Lever, and AshbyHQ job boards using the [Greenhouse, Lever & Ashby ATS Jobs Scraper on Apify](https://apify.com/storeintel/greenhouse-lever-ashby-jobs-scraper). Parses compensation ranges and detects 80+ enterprise SaaS/cloud tools mentioned in job descriptions.

### Воркфлоу #6 (`06_skool-community-creator-leads-scraper_n8n_workflow.json`)
- **Title:** `Discover High-MRR Paid Skool Communities & Enrich Creator Social Leads`
- **Category:** `Sales`, `Marketing`, `Lead Generation`
- **Description (скопировать):**
  > Discover Skool communities by keyword, calculate estimated Monthly Recurring Revenue (MRR = members × subscription price), and extract creator Instagram, YouTube, LinkedIn, X/Twitter, and website links using the [Skool Community & Creator Leads Scraper on Apify](https://apify.com/storeintel/skool-community-creator-leads-scraper).

### Воркфлоу #7 (`07_y-combinator-startups-founders-scraper_n8n_workflow.json`)
- **Title:** `Scrape Y Combinator Startup Founders with Direct Personal LinkedIn & X Links`
- **Category:** `Sales`, `Lead Generation`
- **Description (скопировать):**
  > Extract Y Combinator startup profiles (batch, team size, status, website, tags) and individual founder B2B lead records with direct personal LinkedIn and X/Twitter URLs using the [Y Combinator Startups & Founders Scraper on Apify](https://apify.com/storeintel/y-combinator-startups-founders-scraper).

### Воркфлоу #8 (`08_substack-newsletter-leads-posts-scraper_n8n_workflow.json`)
- **Title:** `Qualify Substack Newsletters for B2B Sponsorships & Extract Post Engagement`
- **Category:** `Marketing`, `Lead Generation`
- **Description (скопировать):**
  > Extract Substack newsletter sponsor leads (author bio, X/Twitter link, paid tier status, average reactions & comments) and post archives using the [Substack Newsletter Leads & Posts Scraper on Apify](https://apify.com/storeintel/substack-newsletter-leads-posts-scraper).

---

## Шаг 3. Как использовать Blueprint-шаблоны в Make.com (`make_blueprints/`)

Все 8 файлов в папке `make_blueprints/*.blueprint.json` полностью совместимы с импортом сценариев Make.com:
1. В Make.com нажмите **Create a new scenario**.
2. В нижней панели нажмите **`...` (More)** → **Import Blueprint**.
3. Выберите любой из 8 файлов `.blueprint.json` — сценарий автоматически соберется на холсте с уже прописанным вызовом вашего скрапера `storeintel`!
4. Кроме того, эти 8 файлов уже выложены в вашем GitHub-репозитории, чтобы пользователи Make могли скачивать их напрямую из Google.

