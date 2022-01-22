---
slug: "nextjs-nedir"
createdAt: "18/12/2021"
commentCount: 3
category: "Development"
title: "NextJs Nedir?"
image: "https://res.cloudinary.com/aintisar/image/upload/v1641294548/Blog/next_kf5dzb.png"
---

# NextJs Nedir?

![Next Logo](https://res.cloudinary.com/aintisar/image/upload/v1641294548/Blog/next_kf5dzb.png)

Next.js bir React üstüne bir frameworkdür. Bu kütüphane sayesinde React.js kullanarak SSR (Server Side Rendering) işlemi yapabilen web uygulamaları geliştirebiliyorsunuz. Bu sayede uygulamanız hem daha performanslı hem de SEO uyumlu olmuş oluyor. Server Side Rendering işlemi aslında sadece React.js ile de yapılabiliyor fakat ciddi anlamda konfigrasyon ve sabır isteyen bir iş. Aslında Next sizi bu ağır konfigrasyon işlerinden kurtarmış oluyor.

## SSR ve CSR

Kelime anlamı olarak CSR (Client Side Rendering), yazdığımız kodların kullanıcı tarafında render edilmesi anlamına geliyor ki bununla alakalı yazının devamında söyleyeceklerim olacak. SSR ise üstte de belirttiğim gibi Server Side Rendering yani yazdığımız kodların sunucu tarafında render edilmesi anlamına geliyor.

### Peki arasındaki fark nedir?

Öncelikle CSR ile başlamak istiyorum. Bu yöntemde sunucu tarafına istek gönderilir ve ardından JS dosyası browser tarafından okunur. Okunma işleminin ardından uygulama kullanıcıya ulaşmış olur ama bu yükleme sırasında kullanıcı bekletilir. JS yüklendikten sonra ise SPA (Single Page Application) şeklinde çalışmaya başlar. Code splitting yapılmaz ve daha da önemlisi arama motorları açısından olmazsa olmaz olan meta etiketleri okunamaz. İlk yükleme esnasında belirlemiş olduğunuz meta bilgileri okunur ve diğer geçiş yapılan sayfalar tekrar render edilmediği için sabit bir title ve description bilgisine sahip olursunuz ki bu da arama motorları için büyük bir eksik. Eğer yönetim paneli benzeri bir uygulama yazmıyorsanız bu çalışma mantığı pek de uygun değil.

SSR’ın çalışma mantığı ise daha farklı. Kullanıcının sayfalar için yapmış olduğu istekler sunucu tarafından alınır, ardından render edilir ve render edilmiş veri kullanıcıya aktarılır. Bu sayede hem performans açısından kazanım sağlarken diğer yandan dinamik meta etiketleri ile uygulamamızın arama motorları tarafından okunabilir olmasını sağlamış oluruz. Teknik bilgilere girerek yazıyı uzatmak ve sizi de yormak istemiyorum. O nedenle bize SSR konusunda yardımcı olacak olan Next.js’e değinmek istiyorum.

## Routing

Next.js’in sihirli işlerinden birisi de Route mantığı. Proje dizinindeki pages klasörü içerisine eklemiş olduğumuz her bir dosya tarayıcıda o isimle bir url oluşturuyor. Mesela ./pages/iletisim.js adında bir dosyanız varsa, hiç bir ek ayara gerek duymadan tarayıcınızdan siteadi.com/iletisim adresine gittiğinizde direkt olarak dosyaya ulaşmış oluyorsunuz.

```js
  const PostDetailPage = ({ post }) => {
  // Next'in fallback işlemi sürerken kullanacağı component
  const router = useRouter();
  if (router.isFallback) {
    return <p className="m-4 text-center">Yükleniyor...</p>;
  }
```

![Folder Structer](https://i.imgur.com/5QD5h36.jpg)
