/**
 * MOGUL Groups - site interactions and language management
 *
 * Responsibilities:
 * - Switch interface language (TR / EN / RU)
 * - Persist language choice in localStorage
 * - Control the responsive navigation menu
 * - Highlight the active page
 * - Update the scroll progress indicator
 * - Handle the demo contact form
 */

const translations = {
  "tr": {
    "nav.home": "Ana Sayfa",
    "nav.chairman": "Başkanın Mesajı",
    "nav.projects": "Projeler",
    "nav.news": "Haberler / Güncel",
    "transport.since": "1998'den Bugüne",
    "transport.heroTitleRef": "Tecrübe, Güven ve<br>Zamanında Teslimat",
    "transport.heroTextRef": "1998 yılından bu yana uluslararası taşımacılık ve lojistik sektöründe; güvenilir, disiplinli ve sürdürülebilir çözümler üreterek iş ortaklarımıza değer katıyoruz.",
    "transport.contactBtn": "İletişime Geçin",
    "transport.yearsExp": "Yıllık Tecrübe",
    "transport.countryExp": "Ülkede Operasyon<br>Deneyimi",
    "transport.successTransport": "Başarılı Taşımacılık",
    "transport.expertTeam": "Uzman Ekip",
    "transport.reliableDelivery": "Güven ve Zamanında<br>Teslimat",
    "nav.vision": "Vizyon & Misyon",
    "nav.about": "Hakkımızda",
    "nav.sectors": "Faaliyet Alanları / Hizmetler",
    "nav.companies": "Şirketler ve Markalar",
    "nav.investment": "Yatırım / İş Ortaklığı Yaklaşımı",
    "nav.values": "Kurumsal Değerler",
    "nav.team": "Yönetim / Ekip",
    "nav.contact": "İletişim",
    "transport.heroTitle": "1998'den Bugüne<br><em>Tecrübe, Güven ve</em><br>Zamanında Teslimat",
    "transport.heroText": "Uluslararası taşımacılık ve lojistikte; güvenilir, disiplinli ve sürdürülebilir çözümler sunuyoruz.",
    "transport.heroButton": "Operasyonunuzu Konuşalım",
    "transport.heroLink": "Bizi Tanıyın ↓",
    "transport.routeLabel": "OPERASYON COĞRAFYASI",
    "transport.routeText": "Sınır geçişleri, transit güzergâhlar ve gümrük süreçlerinde saha deneyimi.",
    "transport.stat1": "'den bugüne tecrübe",
    "transport.stat2": "ülkede operasyon deneyimi",
    "transport.stat3": "Avrupa ülkesine ulaşım ağı",
    "transport.stat4": "uçtan uca operasyon yaklaşımı",
    "transport.kickerAbout": "HAKKIMIZDA",
    "transport.overline": "MOGUL TRANSPORT &amp; LOGISTICS",
    "transport.introTitle": "Lojistik,<br><em>sadece taşımak değildir.</em>",
    "transport.introText": "1998 yılından bu yana uluslararası taşımacılık ve lojistik sektöründe edindiğimiz tecrübeyle; müşterilerimize güvenilir, disiplinli ve sürdürülebilir lojistik çözümleri sunuyoruz.",
    "transport.introText2": "Bizim için lojistik; verilen sözün yerine getirilmesi, zamanında teslimat ve müşterinin güveninin korunmasıdır. Her taşımanın kendine özgü koşullarını ve risklerini önceden değerlendirerek hareket ediyoruz.",
    "transport.kickerExperience": "TECRÜBEYLE GELEN GÜVEN",
    "transport.experienceTitle": "Sahada edinilen<br><em>gerçek deneyim.</em>",
    "transport.experienceText": "Ukrayna, Özbekistan, Moldova, Kazakistan, Kırgızistan, Moğolistan ve Rusya'nın farklı bölgelerinde edindiğimiz operasyonel tecrübe; bölgesel yollar, sınır geçişleri, gümrük süreçleri ve yerel çalışma koşulları konusunda güçlü bir bilgi birikimi oluşturmuştur.",
    "transport.chinaText": "Çin sınırları ve Çin gümrük süreçlerindeki saha deneyimimiz ise Uzak Doğu ile Avrupa ve Orta Asya arasındaki taşımalarda önemli bir operasyonel avantaj sağlamaktadır.",
    "transport.kickerEurope": "AVRUPA'DA GÜÇLÜ ULAŞIM AĞI",
    "transport.europeTitle": "Türkiye'den Avrupa'ya,<br><em>uzanan güçlü bağlantılar.</em>",
    "transport.europeText": "Avrupa'nın farklı ülkelerine ve bölgelerine uzanan uluslararası taşıma operasyonlarında; güzergâh planlaması, sınır geçişleri ve operasyonel süreçlerin koordinasyonunu tecrübemiz doğrultusunda yönetiyoruz.",
    "transport.kickerValues": "BİZİM İÇİN SÖZ, PARADAN ÖNCE GELİR",
    "transport.valuesTitle": "Güven,<br><em>işimizin temelidir.</em>",
    "transport.valuesIntro": "Lojistikte fiyat önemlidir. Ancak bizim için güven daha önemlidir. Verdiğimiz sözü yerine getirmek, her operasyonun temel sorumluluğudur.",
    "transport.value1Title": "Güvenilirlik",
    "transport.value1Text": "Müşterilerimizle uzun vadeli ilişkiler kurmayı ve verilen sözlerin arkasında durmayı hedefliyoruz.",
    "transport.value2Title": "Zamanında Teslimat",
    "transport.value2Text": "Lojistikte zamanın doğrudan maliyet ve güven anlamına geldiğinin bilincindeyiz.",
    "transport.value3Title": "Disiplin",
    "transport.value3Text": "Her taşımanın planlamadan teslimata kadar kontrollü ve düzenli şekilde yürütülmesine önem veriyoruz.",
    "transport.value4Title": "Tecrübe",
    "transport.value4Text": "1998'den bugüne farklı ülkelerde, sınır kapılarında ve uluslararası güzergâhlarda edinilen saha deneyimini operasyonlarımıza yansıtıyoruz.",
    "transport.kickerSolution": "SINIRLARI DEĞİL, ÇÖZÜMLERİ YÖNETİYORUZ",
    "transport.solutionTitle": "Taşımanın tamamını<br><em>birlikte yönetiyoruz.</em>",
    "transport.solutionText": "Uluslararası taşımacılıkta farklı ülkelerin gümrük prosedürleri, sınır geçişleri, transit güzergâhları ve operasyonel koşulları taşımanın zamanlamasını doğrudan etkileyebilir.",
    "transport.solutionText2": "MOGUL Transport &amp; Logistics olarak, taşımanın yalnızca yola çıkmasından değil; sınırdan geçişinden teslimata kadar olan bütün sürecinden sorumlu bir anlayışla hareket ediyoruz.",
    "transport.process1": "Planlama",
    "transport.process2": "Operasyon",
    "transport.process3": "Sınır / Gümrük",
    "transport.process4": "Teslimat",
    "transport.closingTitle": "1998'den bugüne.<br><em>Güvenebileceğiniz çözüm ortağı.</em>",
    "transport.closingText": "Hedefimiz yalnızca yükünüzü taşımak değil, lojistik sürecinizde güvenebileceğiniz bir çözüm ortağı olmaktır.",
    "transport.point1": "Güvenilir taşıma.",
    "transport.point2": "Disiplinli operasyon.",
    "transport.point3": "Zamanında teslimat.",
    "transport.point4": "Verilen sözün arkasında durmak.",
    "transport.closingButton": "İletişime Geçin",
    "home.eyebrow": "CENGİZ MOGUL GROUPS",
    "home.title": "Geleceği <em>birlikte</em> inşa ediyoruz.",
    "home.text": "Farklı sektörlerde sürdürülebilir büyüme, güçlü iş ortaklıkları ve uzun vadeli değer yaratma vizyonuyla ilerliyoruz.",
    "home.explore": "Grubu Keşfet",
    "home.contact": "İletişime Geç",
    "home.heading": "Güçlü fikirler.<br><em>Kalıcı değer.</em>",
    "home.about": "Cengiz Mogul Groups, farklı iş alanlarını ortak bir vizyon altında buluşturan modern bir grup şirketidir.",
    "home.about2": "Güven, yenilikçilik ve sürdürülebilirlik ilkeleriyle uzun vadeli değer yaratmayı hedefliyoruz.",
    "home.more": "Daha fazla →",
    "stats.vision": "Ortak Vizyon",
    "stats.growth": "Büyüme",
    "stats.future": "Gelecek Odaklılık",
    "stats.languages": "Global Dil",
    "home.sectorTitle": "Farklı sektörler,<br><em>tek bir vizyon.</em>",
    "sector.invest": "Yatırım",
    "sector.investText": "Stratejik fırsatları değerlendirerek uzun vadeli değer yaratıyoruz.",
    "sector.trade": "Ticaret",
    "sector.tradeText": "Güvenilir iş ortaklıkları ve sürdürülebilir ticaret.",
    "sector.tech": "Teknoloji",
    "sector.techText": "Dijital dönüşüm ve yeni nesil teknoloji çözümleri.",
    "sector.venture": "Girişimcilik",
    "sector.ventureText": "Yeni fikirleri değer yaratan işlere dönüştürüyoruz.",
    "cta.kicker": "BİRLİKTE BÜYÜYELİM",
    "cta.title": "Geleceğin fırsatlarını<br><em>birlikte keşfedelim.</em>",
    "cta.button": "Bize Ulaşın",
    "about.title": "Bir grubun ötesinde,<br><em>bir gelecek vizyonu.</em>",
    "about.who": "Biz kimiz?",
    "about.text": "Cengiz Mogul Groups; farklı sektörleri ortak bir vizyon etrafında buluşturmayı amaçlayan modern bir grup şirketi yapılanmasıdır.",
    "about.text2": "Faaliyetlerimizi güven, yenilikçilik, sürdürülebilirlik ve uzun vadeli değer yaratma ilkeleri üzerine kuruyoruz.",
    "about.vision": "Uzun vadeli<br><em>düşünmek.</em>",
    "about.visionText": "Değişen dünyaya uyum sağlayan, güçlü iş ortaklıkları kuran ve yeni nesil iş modellerine yatırım yapan global bir grup olmak.",
    "companies.title": "Birlikte daha<br><em>güçlüyüz.</em>",
    "companies.intro": "Grup şirketleri ve markalar burada yer alacaktır. Gerçek şirket bilgileri daha sonra kolayca güncellenebilir.",
    "companies.c1": "Ana grup yapılanması ve stratejik yatırımlar.",
    "companies.c2": "Teknoloji ve dijital çözümler.",
    "companies.c3": "Girişimcilik ve yeni nesil yatırımlar.",
    "companies.future": "Yeni Şirket",
    "companies.c4": "Yakında burada yeni bir grup şirketi yer alacak.",
    "sectors.title": "Değişimi takip etmiyor,<br><em>öncülük ediyoruz.</em>",
    "projects.title": "Fikirden gerçeğe,<br><em>geleceğe.</em>",
    "projects.p1": "Stratejik Yatırım",
    "projects.p2": "Dijital Gelecek",
    "projects.p3": "Yeni Nesil Girişimler",
    "projects.placeholder": "Proje detayları yakında yayınlanacaktır.",
    "contact.title": "Bir fikriniz mi var?<br><em>Konuşalım.</em>",
    "contact.address": "Türkiye",
    "contact.name": "Ad Soyad",
    "contact.email": "E-posta",
    "contact.subject": "Konu",
    "contact.message": "Mesaj",
    "contact.send": "Mesaj Gönder"
  },
  "en": {
    "nav.home": "Home",
    "nav.chairman": "Chairman's Message",
    "nav.projects": "Projects",
    "nav.news": "News / Updates",
    "transport.since": "Since 1998",
    "transport.heroTitleRef": "Experience, Trust and<br>On-Time Delivery",
    "transport.heroTextRef": "Since 1998, we have been creating value for our business partners through reliable, disciplined and sustainable solutions in international transport and logistics.",
    "transport.contactBtn": "Contact Us",
    "transport.yearsExp": "Years of Experience",
    "transport.countryExp": "Countries with Operational<br>Experience",
    "transport.successTransport": "Successful Shipments",
    "transport.expertTeam": "Expert Team",
    "transport.reliableDelivery": "Trust and On-Time<br>Delivery",
    "nav.vision": "Vision & Mission",
    "nav.about": "About Us",
    "nav.sectors": "Business Areas / Services",
    "nav.companies": "Companies & Brands",
    "nav.investment": "Investment / Partnership Approach",
    "nav.values": "Corporate Values",
    "nav.team": "Management / Team",
    "nav.contact": "Contact",
    "transport.heroTitle": "Experience Since 1998<br><em>Trust, Discipline &amp;</em><br>On-Time Delivery",
    "transport.heroText": "Reliable, disciplined and sustainable solutions for international transport and logistics.",
    "transport.heroButton": "Discuss Your Operation",
    "transport.heroLink": "Get to Know Us ↓",
    "transport.routeLabel": "OPERATING CORRIDOR",
    "transport.routeText": "Field experience in border crossings, transit routes and customs processes.",
    "transport.stat1": "of experience",
    "transport.stat2": "countries with operational experience",
    "transport.stat3": "European countries in our network",
    "transport.stat4": "end-to-end operation approach",
    "transport.kickerAbout": "ABOUT US",
    "transport.overline": "MOGUL TRANSPORT &amp; LOGISTICS",
    "transport.introTitle": "Logistics is<br><em>more than moving cargo.</em>",
    "transport.introText": "Since 1998, we have built our experience in international transport and logistics, providing reliable, disciplined and sustainable logistics solutions.",
    "transport.introText2": "For us, logistics means keeping promises, delivering on time and protecting customer trust. We assess the unique conditions and risks of every shipment before we act.",
    "transport.kickerExperience": "TRUST BUILT THROUGH EXPERIENCE",
    "transport.experienceTitle": "Real experience,<br><em>earned in the field.</em>",
    "transport.experienceText": "Our operational experience across Ukraine, Uzbekistan, Moldova, Kazakhstan, Kyrgyzstan, Mongolia and different regions of Russia has built strong knowledge of regional roads, border crossings, customs processes and local operating conditions.",
    "transport.chinaText": "Our field experience with Chinese borders and customs procedures also provides an operational advantage on routes connecting the Far East with Europe and Central Asia.",
    "transport.kickerEurope": "A STRONG EUROPEAN NETWORK",
    "transport.europeTitle": "From Türkiye to Europe,<br><em>strong connections across borders.</em>",
    "transport.europeText": "We coordinate route planning, border crossings and operational processes for international transport operations reaching different countries and regions across Europe.",
    "transport.kickerValues": "FOR US, A PROMISE COMES BEFORE PRICE",
    "transport.valuesTitle": "Trust is<br><em>the foundation of our work.</em>",
    "transport.valuesIntro": "Price matters in logistics. But trust matters more to us. Keeping our word is a fundamental responsibility in every operation.",
    "transport.value1Title": "Reliability",
    "transport.value1Text": "We aim to build long-term relationships with our customers and stand behind our commitments.",
    "transport.value2Title": "On-Time Delivery",
    "transport.value2Text": "We understand that in logistics, time directly affects both cost and trust.",
    "transport.value3Title": "Discipline",
    "transport.value3Text": "We care about running every shipment in a controlled and organized way from planning to delivery.",
    "transport.value4Title": "Experience",
    "transport.value4Text": "We bring field experience gained since 1998 across countries, border gates and international routes into our operations.",
    "transport.kickerSolution": "WE MANAGE SOLUTIONS, NOT JUST BORDERS",
    "transport.solutionTitle": "We manage the entire<br><em>journey together.</em>",
    "transport.solutionText": "Customs procedures, border crossings, transit routes and operating conditions can directly affect the timing of international transport.",
    "transport.solutionText2": "At MOGUL Transport &amp; Logistics, we take responsibility for the entire process—from departure and border crossing to final delivery.",
    "transport.process1": "Planning",
    "transport.process2": "Operations",
    "transport.process3": "Border / Customs",
    "transport.process4": "Delivery",
    "transport.closingTitle": "Since 1998.<br><em>A logistics partner you can trust.</em>",
    "transport.closingText": "Our goal is not only to move your cargo, but to become a solution partner you can rely on throughout your logistics process.",
    "transport.point1": "Reliable transport.",
    "transport.point2": "Disciplined operations.",
    "transport.point3": "On-time delivery.",
    "transport.point4": "Standing behind our word.",
    "transport.closingButton": "Contact Us",
    "home.eyebrow": "CENGİZ MOGUL GROUPS",
    "home.title": "Building the <em>future</em> together.",
    "home.text": "We move forward with a vision of sustainable growth, strong partnerships and long-term value creation across diverse sectors.",
    "home.explore": "Explore the Group",
    "home.contact": "Get in Touch",
    "home.heading": "Strong ideas.<br><em>Lasting value.</em>",
    "home.about": "Cengiz Mogul Groups is a modern group of companies bringing diverse business areas together under one vision.",
    "home.about2": "We aim to create long-term value through trust, innovation and sustainability.",
    "home.more": "Learn more →",
    "stats.vision": "Shared Vision",
    "stats.growth": "Growth",
    "stats.future": "Future Focus",
    "stats.languages": "Global Language",
    "home.sectorTitle": "Different sectors,<br><em>one vision.</em>",
    "sector.invest": "Investment",
    "sector.investText": "Creating long-term value by evaluating strategic opportunities.",
    "sector.trade": "Trade",
    "sector.tradeText": "Reliable partnerships and sustainable commerce.",
    "sector.tech": "Technology",
    "sector.techText": "Digital transformation and next-generation technology solutions.",
    "sector.venture": "Entrepreneurship",
    "sector.ventureText": "Turning new ideas into value-creating businesses.",
    "cta.kicker": "LET'S GROW TOGETHER",
    "cta.title": "Let's explore the opportunities<br><em>of tomorrow.</em>",
    "cta.button": "Contact Us",
    "about.title": "Beyond a group,<br><em>a vision for the future.</em>",
    "about.who": "Who are we?",
    "about.text": "Cengiz Mogul Groups is a modern group structure bringing different sectors together around a shared vision.",
    "about.text2": "Our activities are built on trust, innovation, sustainability and long-term value creation.",
    "about.vision": "Thinking<br><em>long term.</em>",
    "about.visionText": "To become a global group that adapts to change, builds strong partnerships and invests in next-generation business models.",
    "companies.title": "Stronger<br><em>together.</em>",
    "companies.intro": "Group companies and brands will be listed here. Real company information can be updated easily later.",
    "companies.c1": "Main group structure and strategic investments.",
    "companies.c2": "Technology and digital solutions.",
    "companies.c3": "Entrepreneurship and next-generation investments.",
    "companies.future": "New Company",
    "companies.c4": "A new group company will be listed here soon.",
    "sectors.title": "We don't follow change,<br><em>we lead it.</em>",
    "projects.title": "From ideas to reality,<br><em>towards tomorrow.</em>",
    "projects.p1": "Strategic Investment",
    "projects.p2": "Digital Future",
    "projects.p3": "Next-Generation Ventures",
    "projects.placeholder": "Project details will be published soon.",
    "contact.title": "Have an idea?<br><em>Let's talk.</em>",
    "contact.address": "Türkiye",
    "contact.name": "Full Name",
    "contact.email": "Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message"
  },
  "ru": {
    "nav.home": "Главная",
    "nav.chairman": "Послание президента",
    "nav.projects": "Проекты",
    "nav.news": "Новости",
    "transport.since": "С 1998 года",
    "transport.heroTitleRef": "Опыт, доверие и<br>доставка вовремя",
    "transport.heroTextRef": "С 1998 года мы создаём ценность для партнёров благодаря надёжным, дисциплинированным и устойчивым решениям в международных перевозках и логистике.",
    "transport.contactBtn": "Связаться",
    "transport.yearsExp": "Лет опыта",
    "transport.countryExp": "Стран с опытом<br>операций",
    "transport.successTransport": "Успешных перевозок",
    "transport.expertTeam": "Экспертная команда",
    "transport.reliableDelivery": "Доверие и доставка<br>вовремя",
    "nav.vision": "Видение и миссия",
    "nav.about": "О нас",
    "nav.sectors": "Направления / услуги",
    "nav.companies": "Компании и бренды",
    "nav.investment": "Инвестиции / партнёрство",
    "nav.values": "Корпоративные ценности",
    "nav.team": "Руководство / команда",
    "nav.contact": "Контакты",
    "transport.heroTitle": "Опыт с 1998 года<br><em>Доверие, дисциплина и</em><br>доставка вовремя",
    "transport.heroText": "Надёжные, дисциплинированные и устойчивые решения для международных перевозок и логистики.",
    "transport.heroButton": "Обсудить перевозку",
    "transport.heroLink": "Узнать о нас ↓",
    "transport.routeLabel": "ГЕОГРАФИЯ ОПЕРАЦИЙ",
    "transport.routeText": "Практический опыт в пограничных переходах, транзитных маршрутах и таможенных процессах.",
    "transport.stat1": "лет опыта",
    "transport.stat2": "стран с опытом операций",
    "transport.stat3": "европейских стран в сети",
    "transport.stat4": "подход к операциям под ключ",
    "transport.kickerAbout": "О НАС",
    "transport.overline": "MOGUL TRANSPORT &amp; LOGISTICS",
    "transport.introTitle": "Логистика — это<br><em>не просто перевозка.</em>",
    "transport.introText": "С 1998 года мы развиваем опыт в международных перевозках и логистике, предлагая надёжные, дисциплинированные и устойчивые решения.",
    "transport.introText2": "Для нас логистика — это выполнение обещаний, доставка вовремя и сохранение доверия клиента. Перед каждой перевозкой мы оцениваем её особенности и риски.",
    "transport.kickerExperience": "ДОВЕРИЕ, ПОДКРЕПЛЁННОЕ ОПЫТОМ",
    "transport.experienceTitle": "Реальный опыт,<br><em>полученный на практике.</em>",
    "transport.experienceText": "Опыт операций в Украине, Узбекистане, Молдове, Казахстане, Кыргызстане, Монголии и разных регионах России сформировал глубокое знание региональных дорог, пограничных переходов, таможенных процедур и местных условий работы.",
    "transport.chinaText": "Опыт работы с границами и таможенными процедурами Китая даёт нам дополнительное преимущество на маршрутах между Дальним Востоком, Европой и Центральной Азией.",
    "transport.kickerEurope": "СИЛЬНАЯ СЕТЬ В ЕВРОПЕ",
    "transport.europeTitle": "Из Турции в Европу,<br><em>надёжные связи через границы.</em>",
    "transport.europeText": "Мы координируем планирование маршрутов, пограничные переходы и операционные процессы в международных перевозках по разным странам и регионам Европы.",
    "transport.kickerValues": "ДЛЯ НАС ОБЕЩАНИЕ ВАЖНЕЕ ЦЕНЫ",
    "transport.valuesTitle": "Доверие —<br><em>основа нашей работы.</em>",
    "transport.valuesIntro": "Цена важна в логистике. Но для нас доверие важнее. Выполнение обещания — основная ответственность каждой операции.",
    "transport.value1Title": "Надёжность",
    "transport.value1Text": "Мы стремимся строить долгосрочные отношения с клиентами и отвечать за свои обязательства.",
    "transport.value2Title": "Доставка вовремя",
    "transport.value2Text": "Мы понимаем, что в логистике время напрямую связано со стоимостью и доверием.",
    "transport.value3Title": "Дисциплина",
    "transport.value3Text": "Мы обеспечиваем контролируемое и организованное выполнение перевозки от планирования до доставки.",
    "transport.value4Title": "Опыт",
    "transport.value4Text": "Мы применяем в операциях практический опыт, накопленный с 1998 года в разных странах, на границах и международных маршрутах.",
    "transport.kickerSolution": "МЫ УПРАВЛЯЕМ РЕШЕНИЯМИ, А НЕ ТОЛЬКО ГРАНИЦАМИ",
    "transport.solutionTitle": "Мы управляем всем<br><em>маршрутом вместе.</em>",
    "transport.solutionText": "Таможенные процедуры, пограничные переходы, транзитные маршруты и местные условия могут напрямую влиять на сроки международной перевозки.",
    "transport.solutionText2": "MOGUL Transport &amp; Logistics отвечает за весь процесс — от отправления и прохождения границ до конечной доставки.",
    "transport.process1": "Планирование",
    "transport.process2": "Операции",
    "transport.process3": "Граница / Таможня",
    "transport.process4": "Доставка",
    "transport.closingTitle": "С 1998 года.<br><em>Логистический партнёр, которому можно доверять.</em>",
    "transport.closingText": "Наша цель — не просто перевезти ваш груз, а стать надёжным партнёром на всём протяжении логистического процесса.",
    "transport.point1": "Надёжная перевозка.",
    "transport.point2": "Дисциплинированные операции.",
    "transport.point3": "Доставка вовремя.",
    "transport.point4": "Ответственность за обещание.",
    "transport.closingButton": "Связаться с нами",
    "home.eyebrow": "CENGİZ MOGUL GROUPS",
    "home.title": "Строим <em>будущее</em> вместе.",
    "home.text": "Мы развиваемся с видением устойчивого роста, сильных партнёрств и долгосрочного создания ценности в разных сферах.",
    "home.explore": "О группе",
    "home.contact": "Связаться",
    "home.heading": "Сильные идеи.<br><em>Долговечная ценность.</em>",
    "home.about": "Cengiz Mogul Groups — современная группа компаний, объединяющая различные направления бизнеса общей целью.",
    "home.about2": "Мы создаём долгосрочную ценность на основе доверия, инноваций и устойчивого развития.",
    "home.more": "Подробнее →",
    "stats.vision": "Общее видение",
    "stats.growth": "Рост",
    "stats.future": "Фокус на будущем",
    "stats.languages": "Глобальный язык",
    "home.sectorTitle": "Разные отрасли,<br><em>единое видение.</em>",
    "sector.invest": "Инвестиции",
    "sector.investText": "Создаём долгосрочную ценность, оценивая стратегические возможности.",
    "sector.trade": "Торговля",
    "sector.tradeText": "Надёжные партнёрства и устойчивый бизнес.",
    "sector.tech": "Технологии",
    "sector.techText": "Цифровая трансформация и технологии нового поколения.",
    "sector.venture": "Предпринимательство",
    "sector.ventureText": "Превращаем новые идеи в бизнес, создающий ценность.",
    "cta.kicker": "РАСТЁМ ВМЕСТЕ",
    "cta.title": "Давайте вместе откроем<br><em>возможности будущего.</em>",
    "cta.button": "Связаться с нами",
    "about.title": "Больше, чем группа,<br><em>видение будущего.</em>",
    "about.who": "Кто мы?",
    "about.text": "Cengiz Mogul Groups — современная группа компаний, объединяющая разные отрасли вокруг общего видения.",
    "about.text2": "Мы строим деятельность на доверии, инновациях, устойчивости и долгосрочном создании ценности.",
    "about.vision": "Мыслить<br><em>на перспективу.</em>",
    "about.visionText": "Стать глобальной группой, способной адаптироваться к изменениям, строить сильные партнёрства и инвестировать в бизнес-модели нового поколения.",
    "companies.title": "Вместе мы<br><em>сильнее.</em>",
    "companies.intro": "Здесь будут представлены компании и бренды группы. Реальную информацию можно легко добавить позже.",
    "companies.c1": "Основная структура группы и стратегические инвестиции.",
    "companies.c2": "Технологии и цифровые решения.",
    "companies.c3": "Предпринимательство и инвестиции нового поколения.",
    "companies.future": "Новая компания",
    "companies.c4": "Здесь скоро появится новая компания группы.",
    "sectors.title": "Мы не следуем за изменениями,<br><em>мы их возглавляем.</em>",
    "projects.title": "От идеи к реальности,<br><em>навстречу будущему.</em>",
    "projects.p1": "Стратегические инвестиции",
    "projects.p2": "Цифровое будущее",
    "projects.p3": "Предпринимательство нового поколения",
    "projects.placeholder": "Подробности проекта будут опубликованы в ближайшее время.",
    "contact.title": "Есть идея?<br><em>Давайте обсудим.</em>",
    "contact.address": "Турция",
    "contact.name": "Имя и фамилия",
    "contact.email": "Электронная почта",
    "contact.subject": "Тема",
    "contact.message": "Сообщение",
    "contact.send": "Отправить"
  }
};

const DEFAULT_LANGUAGE = "tr";
const LANGUAGE_STORAGE_KEY = "cmg-lang";
const MOBILE_BREAKPOINT = 1040;

function getCurrentLanguage() {
  return localStorage.getItem(LANGUAGE_STORAGE_KEY) || DEFAULT_LANGUAGE;
}

function applyLanguage(language) {
  const dictionary = translations[language] || translations[DEFAULT_LANGUAGE];

  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedValue = dictionary[key];

    if (translatedValue !== undefined) {
      element.innerHTML = translatedValue;
    }
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });

  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
}

function initializeLanguageSwitcher() {
  applyLanguage(getCurrentLanguage());

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });
}

function initializeNavigation() {
  const menuButton = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".nav");

  if (!menuButton || !navigation) return;

  menuButton.setAttribute("aria-expanded", "false");

  const closeMenu = () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.setAttribute(
      "aria-expanded",
      navigation.classList.contains("open") ? "true" : "false",
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const clickedOutsideMenu =
      !navigation.contains(event.target) && !menuButton.contains(event.target);

    if (
      window.innerWidth <= MOBILE_BREAKPOINT &&
      navigation.classList.contains("open") &&
      clickedOutsideMenu
    ) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) closeMenu();
  });
}

function highlightCurrentPage() {
  const normalizedPath = location.pathname.endsWith("/")
    ? location.pathname
    : `${location.pathname}/`;

  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === normalizedPath || (href === "/" && normalizedPath === "/")) {
      link.classList.add("active");
    }
  });
}

function initializeScrollProgress() {
  window.addEventListener(
    "scroll",
    () => {
      const root = document.documentElement;
      const scrollableHeight = root.scrollHeight - root.clientHeight;
      const progress = scrollableHeight > 0 ? (root.scrollTop / scrollableHeight) * 100 : 0;

      root.style.setProperty("--scroll", `${progress}%`);
    },
    { passive: true },
  );
}

function initializeContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const messageElement = document.getElementById("formMessage");
    const dictionary = translations[getCurrentLanguage()] || translations[DEFAULT_LANGUAGE];

    if (messageElement) {
      messageElement.textContent = `${dictionary["contact.send"]} ✓`;
    }

    form.reset();
  });
}

initializeLanguageSwitcher();
initializeNavigation();
highlightCurrentPage();
initializeScrollProgress();
initializeContactForm();
