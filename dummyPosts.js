export const data = [
  {
    postId: "p1",
    createdAt: new Date(),
    commentCount: 3,
    category: "Eğitim",
    title: "Yeni nesil web geliştirme: Next.js",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    imageSrc:
      "https://res.cloudinary.com/aintisar/image/upload/v1637203222/Blog/1_hvff4g.jpg",
  },
  {
    postId: "p2",
    createdAt: new Date(),
    commentCount: 5,
    category: "Kişisel Gelişim",
    title: "Lorem Ipsum is simply dummy text.",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    imageSrc:
      "https://res.cloudinary.com/aintisar/image/upload/v1637203224/Blog/2_x1b7up.jpg",
  },
  {
    postId: "p3",
    createdAt: new Date(),
    commentCount: 0,
    category: "Eğitim",
    title: "Lorem Ipsum has been the industry's.",
    content:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    imageSrc:
      "https://res.cloudinary.com/aintisar/image/upload/v1637203216/Blog/3_yw2di6.jpg",
  },
];

export const categories = () => {
  const result = [];

  for (const post of data) {
    console.log("Dış döngü");
    if (result.length === 0) {
      console.log("İlk if döngü");
      result.push({ category: post.category, count: 1 });
    }
    for (const item of result) {
      console.log("iç döngü");
      if (item.category === post.category) {
        item.count += 1;
      } else {
        result.push({ category: post.category, count: 1 });
      }
    }
  }

  console.log("function:", result);
  return result;
};
