(() => {
  const selectors = {
    splide: '.splide'
  };

  const wines = [
    {
      title: '2020 Le Bosq Vin Blanc',
      origin: 'France',
      taste: 'Lime, Green Apple, Minerals',
      price: 14.30,
      available: true,
      salePrice: 10.00
    },
    {
      title: '2018 George Phillips Cellars Reserve Selection No.101 Zinfandel',
      origin: 'California, United States',
      taste: 'Blueberry, Cherry, Black Pepper',
      price: 17.99,
      available: true,
      salePrice: null
    },
    {
      title: '2018 Sierra Trasils Old Vine Zinfandel',
      origin: 'California, United States',
      taste: 'Strawberry, Plum, Red Currant, Tobacco, Black Pepper, Oak',
      price: 14.99,
      available: true,
      salePrice: 12.99
    },
    {
      title: "2020 L'arca Negromamaro I.G.T.",
      origin: 'Italy',
      taste: 'Red Cherry, Red Currant, Spice',
      price: 17.99,
      available: true,
      salePrice: null
    },
    {
      title: "2019 Honoré de Berticot Cabernet Sauvignon",
      origin: 'France',
      taste: 'Mocha, Plum, Black Cherry',
      price: 17.99,
      available: true,
      salePrice: null
    },
    {
      title: '2020 St. Désir Syrah/Merlot',
      origin: 'France',
      taste: 'Red Plum, Baking Spices, Chocolate',
      price: 17.99,
      available: true,
      salePrice: null
    },
    {
      title: '2017 La Fea Tempranillo Reserva',
      origin: 'Spain',
      taste: 'Wild Cherry, Toasted Coconut, Baking Spice',
      price: 21.99,
      available: true,
      salePrice: null
    },
    {
      title: "2019 Abbazia Barbera d'Asti D.O.C.G.",
      origin: 'Italy',
      taste: 'Little Berries, Plum, Spices',
      price: 19.99,
      available: true,
      salePrice: null
    }
  ];
  
  function createSlide(wine) {
    return `
      <li class="splide__slide max-w-[46%]">
        <div class="flex flex-col px-3">
          <div class="relative bg-gray aspect-[214/253]">
            <img 
              class="
                block
                mx-auto
                w-1/2
                aspect-[61/218]
                py-4
              "
              src="./images/image_56.png"
              alt="${wine.title}" 
              loading="eager"
            >
            <div class="absolute top-3 left-2">
              <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="29.4793" cy="29.4755" r="28.9546" fill="#666666"/>
              </svg>
            </div>
          </div>

          <h2 class="font-bold text-[16px] leading-[22px] md:text-[18px] h-24 mt-4">
            ${wine.title}
          </h2>

          <div class="flex flex-col text-[16px] leading-[22px] md:text-[18px] h-38">
            <span class="mb-1 text-sm opacity-60 h-9">${wine.origin}</span>
            <span class="mb-1 text-sm opacity-60 h-16">${wine.taste}</span>
            
            <span class="h-[50px]">${renderPrice(wine)}</span>


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
              cart-btn
              w-full 
              h-[52px]
              font-bold 
              text-white 
              bg-red
            "
          >
          ${wine.available ? 'Add to Cart' : 'Out of Stock'}

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
      type: 'slide',
      mediaQuery: 'min',
      perPage: '2',
 
      rewind: true,
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


    var bar = splide.root.querySelector( '.slider-progress-bar' );

    splide.on( 'mounted move', function () {
      var end = splide.Components.Controller.getEnd() + 1;
      bar.style.width = String( 100 * ( splide.index +1) / end) + '%';
      
      console.log(bar.style.width);
      console.log(splide.index);
      console.log(end);
    } );
  }


  function init() {
    createSlides();
    initSlider();
  }

  function calculatePercentage(wine) {
    const percentage = 100 - ((wine.salePrice / wine.price) * 100);
    return percentage.toFixed(0);
  }

  function renderPrice(wine) {

    const discount = calculatePercentage(wine);
    if(wine.salePrice > 0){
      return`<span class="font-bold mb-1 text-xl text-[#CC0000]">$${wine.salePrice.toFixed(2)} </span> 
      <div>
        <span class="line-through"> $${wine.price.toFixed(2)}</span>
        <span class="font-bold text-[#CC0000]">${discount}% off</span>
      </div>`
    } else {
      return `<span class="font-bold mb-1 text-xl">$${wine.price.toFixed(2)}</span>`
    }
  }
  
  document.addEventListener('DOMContentLoaded', init);
})();


