(() => {
  const selectors = {
    splide: '.splide'
  };

  const wines = [
    {
      title: '2020 Le Bosq Vin Blanc',
      origin: 'France',
      taste: 'Lime, Green Apple, Minerals',
      price: '$14.30'
    },
    {
      title: '2018 George Phillips Cellars Reserve Selection No.101 Zinfandel',
      origin: 'California, United States',
      taste: 'blueberry, cherry, black pepper',
      price: '$17.99'
    },
    {
      title: '2018 Sierra Trasils Old Vine Zinfandel',
      origin: 'California, United States',
      taste: 'Strawberry, plum, red currant, tobacco, black pepper, oak',
      price: '$14.99'
    },
    {
      title: "2020 L'arca Negromamaro I.G.T.",
      origin: 'Italy',
      taste: 'Red Cherry, Red Currant, Spice',
      price: '$17.99'
    },
    {
      title: "2019 Honoré de Berticot Cabernet Sauvignon",
      origin: 'France',
      taste: 'Mocha, Plum, Black Cherry',
      price: '$17.99'
    },
    {
      title: '2020 St. Désir Syrah/Merlot',
      origin: 'France',
      taste: 'Red Plum, Baking Spices, Chocolate',
      price: '$17.99'
    },
    {
      title: '2017 La Fea Tempranillo Reserva',
      origin: 'Spain',
      taste: 'Wild Cherry, Toasted Coconut, Baking Spice',
      price: '$21.99'
    },
    {
      title: "2019 Abbazia Barbera d'Asti D.O.C.G.",
      origin: 'Italy',
      taste: 'Little Berries, Plum, Spices',
      price: '$19.99'
    }
  ];
  
  function createSlide(wine) {
    return `
      <li class="splide__slide">
        <div class="flex flex-col h-525 w-254 px-3 mx-5">
          <div class="relative bg-gray pt-[118.1822%]">
            <img 
              class="
                absolute 
                top-1/2 
                left-1/2 
                transform 
                -translate-x-1/2 
                -translate-y-1/2
              "
              src="./images/image_56.png" 
              alt="${wine.title}" 
              loading="eager"
            >
          </div>
          <h2 class="font-bold text-lg">
            ${wine.title}
          </h2>
          <span class="text-sm">${wine.origin}</span>
          <span class="mb-1 text-sm">${wine.taste}</span>
          <span class="font-bold mb-1 text-xl">${wine.price}</span>
          <div>
            <img 
              class="mb-7" 
              src="./images/Ratings.png" 
              loading="eager"
            >
          </div>
          <button 
            class="
              w-full 
              px-14 
              py-3.5 
              font-bold 
              text-white 
              bg-red
            "
          >
            Add to Cart
          </button>
        </div>
      </li>
    `
  }

  function createSlides() {
    const slides = wines.map(wine => createSlide(wine));
    
    if (!document.querySelector('.splide__list')) {
      return;
    }

    document.querySelector('.splide__list').innerHTML = slides.join();
  }

  function initSlider() {
    const splide = new Splide(selectors.splide, {
      type: 'loop',
      perPage: 5,
      drag: 'free',
      snap: 'true',
      focus: 'left',
      gap: '1rem'
    });

    splide.mount();
  }

  function init() {
    createSlides();
    initSlider();
  }

  document.addEventListener('DOMContentLoaded', init);
})();


