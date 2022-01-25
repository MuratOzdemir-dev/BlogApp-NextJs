---
slug: "react-dunyasina-giris"
createdAt: "15/12/2021"
category: "Life"
title: "React.js Dünyasına Giriş"
image: "https://res.cloudinary.com/aintisar/image/upload/v1640342416/Blog/react_xep76u.png"
---

# React.js dünyasına giriş

![React Logo](https://res.cloudinary.com/aintisar/image/upload/v1640342416/Blog/react_xep76u.png)

İlk yazımda React.js dünyasına giriş yapıp, React’ın ne olduğunu, component, props, state kavramlarının ne anlama geldiğini ve nasıl kullanıldığını irdeleyip, küçük bir uygulama yapmak istedim.

## Nedir Bu React ?

React, açık kaynak dünyasına katkı sağlayan Facebook tarafından geliştirilen javascript ile önyüz bileşenleri oluşturma kütüphanesidir. Burada dikkat edilmesi gereken nokta React bir framework değil, bir kütüphanedir. Bunun nedeni ise React’ın sadece view katmanına odaklanmasıdır. View katmanı dışında herhangi bir mimari katman ile ilgisi yoktur.

React, observer desing pattern’ını kullanır. Bu sayede uygulamamızdaki state değişikliklerini bizim yönetmemize gerek kalmaz. State değişikliklerini tespit ederek UI’ı tekrar oluşturur. Bu oluşturma işlemini ise Virtual DOM ile yapmaktadır. Bu sayede UI tekrar oluşturulduğunda herhangi bir performans kaybı meydana gelmez.

Şimdi gelin, React geliştirmeye başlayacağımız günden itibaren en çok karşılaşacağımız terimleri incelemeye başlayalım.

## Component

Component, aslına bakacak olursanız her şeydir. Yahu şimdi ne diyor bu adam dediğinizi duyar gibiyim :) Hemen konuya açıklık getireyim. Büyük bir resmin küçük parçaları aslında. Örnek vermem gerekirse projelerimizde birden fazla ve farklı yerlerde tekrar tekrar kullandığımız yapılar oluyor. Aynı div elementini başka sayfalarda kullanmak gibi. İşte tam da bu sırada component bir gün ışığı gibi doğuyor ve bizlere kolaylık sağlıyor. Diyor ki, sen beni bileşen olarak bir kere oluştur ve sonra dilediğin yerde, dilediğin kadar kullan. Böylelikle bir değişiklik yapmak istediğimizde kullanılan tüm sayfalarda değişiklik yapmak yerine component üzerinde değişiklik yaptığımızda bu componentin kullanıldığı tüm sayfalara ilgili değişiklik yansıyacaktır. İşte böyle de kurtarıcıdır.

![React Component](https://i.imgur.com/XvISZlT.png)
