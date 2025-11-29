# Yayına Alma Rehberi (Deployment Guide)

Uygulamanızın kodları hazır ve Git altyapısı kuruldu. Şimdi bu projeyi GitHub'a yükleyip Vercel üzerinden yayınlamak için aşağıdaki adımları izleyin.

## 1. GitHub Deposu Oluşturma
1. [GitHub.com](https://github.com) adresine gidin ve giriş yapın.
2. Sağ üstteki **+** ikonuna tıklayıp **New repository** seçeneğini seçin.
3. **Repository name** kısmına `rhinoplasty-info` yazın.
4. **Public** veya **Private** seçeneğini işaretleyin (tercihinize göre).
5. **Create repository** butonuna tıklayın.

## 2. Kodları GitHub'a Gönderme
Aşağıdaki komutları terminalde çalıştırarak kodlarınızı yeni oluşturduğunuz depoya gönderin. `KULLANICI_ADI` kısmını kendi GitHub kullanıcı adınızla değiştirmeyi unutmayın.

```bash
git remote add origin https://github.com/KULLANICI_ADI/rhinoplasty-info.git
git branch -M main
git push -u origin main
```

## 3. Vercel Kurulumu
1. [Vercel.com](https://vercel.com) adresine gidin ve giriş yapın.
2. Dashboard'da **Add New...** butonuna tıklayıp **Project**'i seçin.
3. **Import Git Repository** bölümünde GitHub hesabınızı seçin.
4. Listeden `rhinoplasty-info` projesini bulun ve **Import** butonuna tıklayın.
5. Açılan sayfada hiçbir ayarı değiştirmenize gerek yok, doğrudan **Deploy** butonuna tıklayın.

## 4. Alan Adı (Domain) Ayarları
Uygulama yayınlandıktan sonra, istediğiniz subdomain yapılandırmasını (rinoplasti ve rhinoplasty) yapmak için:

1. Vercel'de projenizin sayfasına gidin.
2. Üst menüden **Settings** -> **Domains** sekmesine tıklayın.
3. Aşağıdaki iki alan adını sırasıyla ekleyin:
   - `rinoplasti.ibrahimyagci.com`
   - `rhinoplasty.ibrahimyagci.com`
4. Vercel size DNS ayarları için gerekli **CNAME** kayıtlarını gösterecektir.
5. Alan adınızın kayıtlı olduğu panelde (DNS Yönetimi), bu subdomainler için CNAME kayıtlarını Vercel'in belirttiği değere (genelde `cname.vercel-dns.com`) yönlendirin.

## Nasıl Çalışır?
Uygulama içerisine eklediğimiz kod sayesinde:
- Ziyaretçi `rhinoplasty.ibrahimyagci.com` adresinden gelirse site otomatik olarak **İngilizce** açılır.
- Ziyaretçi `rinoplasti.ibrahimyagci.com` (veya başka bir adres) üzerinden gelirse site otomatik olarak **Türkçe** açılır.
