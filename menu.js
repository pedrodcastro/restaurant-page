const menu = [
  {
    id: 1,
    title: "cafezinho",
    category: "café",
    price: "4,00",
    img: "./images/pao.jpg",
    desc: `Pão quentinho para começar o dia bem com um café`,
  },
  {
    id: 2,
    title: "strogonoff",
    category: "almoço",
    price: "12,00",
    img: "./images/strogonoff.jpg",
    desc: `Strogonoff de frango, uma delicia hummmm`,
  },
  {
    id: 3,
    title: "pudim",
    category: "sobremesa",
    price: "8,00",
    img: "./images/pudim.jpg",
    desc: `Melhor pudim da cidade, esse sim foi feito para você.`,
  },
  {
    id: 4,
    title: "pão de queijo",
    category: "café",
    price: "6,00",
    img: "./images/pao-de-queijo.jpg",
    desc: `Pão de queijo bem fofinho.`,
  },
  {
    id: 5,
    title: "Churrasco",
    category: "almoço",
    price: "20,00",
    img: "./images/churrasco.jpg",
    desc: `Churrasco no ponto ideal para matar sua fome.`,
  },
  {
    id: 6,
    title: "Milkshake",
    category: "sobremesa",
    price: "9,00",
    img: "./images/milkshake.jpg",
    desc: `Melhor milkshake da cidade, leite recém tirado da vaca.`,
  },
  {
    id: 7,
    title: "esfiha",
    category: "café",
    price: "6,00",
    img: "./images/esfiha.jpg",
    desc: `Esfiha de frango para começar o dia bem meu amigão.`,
  },
  {
    id: 8,
    title: "feijoada",
    category: "almoço",
    price: "15,00",
    img: "./images/feijoada.jpg",
    desc: `Melhor feijoada do Brasil, talvez até da cidade.`,
  },
  {
    id: 9,
    title: "sorvete",
    category: "sobremesa",
    price: "7,00",
    img: "./images/sorvete.jpg",
    desc: `Sorvete bem geladinho para alegrar seu dia.`,
  },
  {
    id: 10,
    title: "parmegiana",
    category: "jantar",
    price: "20,00",
    img: "./images/parmegiana.jpg",
    desc: `Melhor parmegiana, minha mãe que passou a receita.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnsContainer = document.querySelector(".btns-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItens(menu);

  const categories = ["all"];

  menu.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  // const categories = menu.reduce(
  //   function (values, item) {
  //     if (!values.includes(item.category)) {
  //       values.push(item.category);
  //     }
  //     return values;
  //   },
  //   ["all"]
  // );

  displayMenuBtns(categories);

  console.log(categories);
});

function displayMenuBtns(categories) {
  let displayBtns = categories
    .map(function (category) {
      return `<button class="btn filter-btn" data-id=${category}>${category}</button>`;
    })
    .join(" ");

  btnsContainer.innerHTML = displayBtns;

  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", (event) => {
      const category = event.currentTarget.dataset.id;
      const categoryMenu = menu.filter(function (menuItem) {
        if (menuItem.category == category) {
          return menuItem;
        }
      });

      if (category == "all") {
        displayMenuItens(menu);
      } else {
        displayMenuItens(categoryMenu);
      }
    });
  });
}

function displayMenuItens(menuItens) {
  let displayMenu = menuItens
    .map(function (item) {
      return `<div class="menu-item">
                <img src="${item.img}" alt="${item.title}" class="photo" />
                <div class="item-infos">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                  </header>
                  <p>${item.desc}</p>
                </div>
              </div>`;
    })
    .join(" ");
  sectionCenter.innerHTML = displayMenu;
}
