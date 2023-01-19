const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "About",
        description: "I began my culinary journey in my teens alongside my dad, former Strip T's chef & owner. I quickly fell in love with the thrill of cooking. I knew that I wanted to pursue food professionally.  So I did the next best thing: I dropped my life between PA & Boston and moved to Brooklyn. There, I studied at The Culinary Institute of America. After graduating, I went on to work alongside David Chang -- who was at the beginning of creating his Momofuku empire. Upon my return to Boston, I opened Ribelle, the 4-star restaurant in Brookline that introduced me to 5 star reviews. Whaling in Oklahoma's opening in the South End of Boston showcased my love for Japanese-style cooking and food. Now living a more family-focused life, I hope to bring my passion for food to your kitchen table or next event.",
        img: "assets/images/spoons.png"    
    },
    {
        id: 2,
        title: "Services",
        description: "What we offer: Food prep, drop off, special events, tasting menus, and more! Get in touch with us and let us help you create your ideal experience.",
        img: "assets/images/lob.png"
    },
    {
        id: 3,
        title: "For Inquiries ",
        description: "Please fill out the form below or send us an email: hello@timmaslow.com", 
        img: "assets/images/plates.png"
    },
    {
        id: 4,
        title: "Interested in a unique culinary experience? Help us get to know you.",
        description: "",
        img: "assets/images/feast.png"
    },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductDescription = document.querySelector(".productDescription");
const currentProductForm = document.querySelector(".form");


menuItem.forEach((item, index) =>{
    item.addEventListener("click", () => {
        //change current slide 
       wrapper.style.transform = `translate(${-100 * index}vw)`;
       //change the chosen product
       chosenProduct = products[index];
       //change texts of currentProduct per each page
       currentProductTitle.textContent = chosenProduct.title;
       currentProductDescription.textContent = chosenProduct.description;
       currentProductImg.src = chosenProduct.img
    });
});

const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = 'timmaslow.com';

function submitted(event) {
  event.preventDefault();
  const url = google + site + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);
