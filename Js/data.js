const posts = [];

const images = [
  { url: '/public/img1.jpeg', id: 1 },
  { url: '/public/img2.jpeg', id: 2 },
  { url: '/public/img3.jpeg', id: 3 },
  { url: '/public/img4.jpeg', id: 4 },
  { url: '/public/img5.jpeg', id: 5 },
  { url: '/public/img6.jpeg', id: 6 },
  { url: '/public/img7.jpeg', id: 7 },
  { url: '/public/img8.jpeg', id: 8 },
  { url: '/public/img9.jpeg', id: 9 },
];

const cards = [
  {
    url: '/iconpen.png',
    title: 'Projekty',
    text: 'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.',
  },
  {
    url: '/Iconeye.png',
    title: 'Wizualizacje',
    text: 'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D',
  },
  {
    url: '/Iconstars.png',
    title: 'Realizacje',
    text: 'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.',
  },
];

const hero = [
  {
    url: '/hero-img1.jpeg',
    title: 'Nowoczesna aranżacja Twojego ogrodu',
    text: 'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usługz indywidualnym podejściem do każdego projektu.',
  },
  {
    url: '/hero-img2.jpeg',
    title: 'kolejny tekst',
    text: 'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usługz indywidualnym podejściem do każdego projektu.',
  },
  {
    url: '/hero-img3.jpeg',
    title: 'Another one ',
    text: 'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usługz indywidualnym podejściem do każdego projektu.',
  }
];

let imageIndex = 0;
for (let i = 0; i < 40; i++) {
  let item = {
    id: i,
    title: `post ${i}`,
    image: images[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}

export { images, cards };
