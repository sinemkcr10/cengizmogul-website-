# MOGUL Groups Corporate Website

MOGUL Groups için hazırlanmış, çok sayfalı ve responsive kurumsal web sitesi.
Proje saf **HTML, CSS ve JavaScript** ile geliştirilmiştir; ek bir framework veya build sistemi gerektirmez.

## Özellikler

- Responsive masaüstü, tablet ve mobil tasarım
- Türkçe / İngilizce / Rusça dil seçimi
- Dil tercihinin `localStorage` ile hatırlanması
- Mobil hamburger menü
- Aktif sayfa vurgusu
- Scroll ilerleme göstergesi
- Çok sayfalı kurumsal yapı
- Ana sayfada MOGUL global operasyon ağı görseli

## Proje Yapısı

```text
.
├── index.html              # Ana sayfa
├── about.html              # Hakkımızda
├── sectors.html            # Faaliyet alanları
├── companies.html          # Şirketler
├── projects.html           # Projeler
├── contact.html            # İletişim
├── chairman.html           # Ek içerik sayfası
├── investment.html         # Ek içerik sayfası
├── news.html               # Ek içerik sayfası
├── team.html               # Ek içerik sayfası
├── values.html             # Ek içerik sayfası
└── assets/
    ├── css/
    │   └── style.css       # Tüm site stilleri ve responsive kurallar
    ├── img/                # Görsel dosyaları
    └── js/
        └── main.js         # Dil, menü ve site etkileşimleri
```

## Çalıştırma

Projeyi indirdikten sonra `index.html` dosyasını doğrudan tarayıcıda açabilirsiniz.

Daha sağlıklı bir geliştirme ortamı için VS Code **Live Server** gibi basit bir yerel sunucu da kullanabilirsiniz.

## GitHub'a Yükleme

```bash
git init
git add .
git commit -m "Initial MOGUL website"
git branch -M main
git remote add origin REPOSITORY_URL
git push -u origin main
```

`REPOSITORY_URL` kısmını kendi GitHub repository adresinizle değiştirin.

## Kod Düzeni

- HTML dosyaları okunabilir şekilde girintilendirildi.
- CSS kuralları satır satır düzenlendi; responsive bölümler korunuyor.
- JavaScript fonksiyonlara ayrıldı ve açıklayıcı isimler kullanıldı.
- Mevcut sayfa bağlantıları, dil sistemi ve mobil menü davranışı korunmuştur.

## Not

İletişim formu şu anda demo davranışındadır; gerçek e-posta gönderimi için daha sonra bir backend veya form servisi bağlanması gerekir.
