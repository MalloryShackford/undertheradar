const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "About",
        price: "something here",
        description: "I began my culinary journey in my teens alongside my dad, former Strip T's chef & owner. I quickly fell in love with the thrill of cooking. I knew that I wanted to pursue food professionally.  So I did the next best thing: I dropped my life between PA & Boston and moved to Brooklyn. There, I studied at The Culinary Institute of America. After graduating, I went on to work alongside David Chang -- who was at the beginning of creating his Momofuku empire. Upon my return to Boston, I opened Ribelle, the 4-star restaurant in Brookline that introduced me to ___. Followed by Whaling in Oklahoma in the South End that showcased my love for Japanese-style cooking and food. Now living a more family-focused life, I hope to bring my passion for food to your kitchen table or next event.",
        colors: [
            {
                code: "black",
                img: "assets/images/spoons.png"
            },
        ],
        
    },
    {
        id: 2,
        title: "Services",
        price: "*",
        description: "What we offer: Drop off, special events, tasting menus, Add more! Contact us for a free consultation and let us help you create your ideal experience.",
        colors: [
            {
                code: "black",
                img: "assets/images/lob.png"
            },
        ],
    },
    {
        id: 3,
        title: "For Inquiries or a ",
        price: "Free Consultation",
        description: "Please fill out the form below or send us an email: hello@timmaslow.com", 
        
        colors: [
            {
                code: "black",
                img: "assets/images/plates.png"
            },
        ],
    },
    {
        id: 4,
        title: "Interested in a unique culinary experience?",
        price: "Help us get to know you",
        description: "",
        colors: [
            {
                code: "black",
                img: "assets/images/feast.png"
            },
        ],
    },
    // {
    //     id: 5,
    //     title: "Hippie",
    //     price: 99,
    //     colors: [
    //         {
    //             code: "gray",
    //             img: "assets/images/hippie.png"
    //         },
    //         {
    //             code: "black",
    //             img: "assets/images/hippie2.png"
    //         },
    //     ],
    // },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const currentProductDescription = document.querySelector(".productDescription");
const currentProductForm = document.querySelector(".form");


menuItem.forEach((item, index) =>{
    item.addEventListener("click", () => {
        //change current slide 
       wrapper.style.transform = `translate(${-100 * index}vw)`;
       //change the chosen product
       chosenProduct = products[index];
       //change texts of currentProduct
       currentProductTitle.textContent = chosenProduct.title;
       currentProductPrice.textContent = "" + chosenProduct.price;
       currentProductDescription.textContent = chosenProduct.description;
       currentProductForm.src = chosenProduct.colors.form;
       currentProductImg.src = chosenProduct.colors[0].img;
       currentProductColors.forEach((color, index) => {
        //assign new colors
        color.style.backgroundColor = chosenProduct.colors[index].code;
       })    
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", ( )=> {
        currentProductImg.src = chosenProduct.colors[index].img;
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
        size.style.background = "white";
        size.style.color = "black";
        });
        size.style.background = "black";
        size.style.color = "white";
        });
    });

    const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    productButton.addEventListener("click", () => {
        payment.style.display = "flex";
    })
    close.addEventListener("click", () => {
        payment.style.display = "none";
    });

const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'nike.com';

function submitted(event) {
  event.preventDefault();
  const url = google + site + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);