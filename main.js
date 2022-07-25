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
        <div class="flex flex-col px-3">
          <div class="relative bg-gray">
            <img 
              class="
                block
                mx-auto
                w-1/2
              "
              src="./images/image_56.png"
              alt="${wine.title}" 
              loading="eager"
            >
          </div>

          <h2 class="font-bold text-[16px] leading-[22px] md:text-[18px]">
            ${wine.title}
          </h2>

          <div class="flex flex-col text-[16px] leading-[22px] md:text-[18px]">
            <span class="text-sm opacity-60">${wine.origin}</span>
            <span class="mb-1 text-sm opacity-60">${wine.taste}</span>
            <span class="font-bold mb-1 text-xl">${wine.price}</span>
            <div>
              <img 
                class="mb-7" 
                src="./images/Ratings.png" 
                loading="eager"
              >
            </div>
          </div>
        
          <button 
            class="
              w-full 
              h-[52px]
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

    document.querySelector('.splide__list').innerHTML = slides.join('');
  }

  function initSlider() {
    // breakpoints 320, 475/480, 640, 768, 1024, 1280, 1536
    const splide = new Splide(selectors.splide, {
      type: 'loop',
      mediaQuery: 'min',
      perPage: '2',
      gap: '1rem',
      breakpoints: {
        320: {
          perPage: 2
        },
        475: {
          perPage: 2
        },
        640: {
          perPage: 3
        },
        768: {
          perPage: 4
        },
        1024: {
          perPage: 5
        }
      }
    });

    splide.mount();
  }

  function init() {
    createSlides();
    initSlider();
  }

  document.addEventListener('DOMContentLoaded', init);
})();


