const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const meownav = document.querySelectorAll('nav a')
meownav[0].textContent = siteContent['nav'] ['nav-item-1']
meownav[1].textContent = siteContent['nav'] ['nav-item-2']
meownav[2].textContent = siteContent['nav'] ['nav-item-3']
meownav[3].textContent = siteContent['nav'] ['nav-item-4']
meownav[4].textContent = siteContent['nav'] ['nav-item-5']
meownav[5].textContent = siteContent['nav'] ['nav-item-6']

const ctah = document.querySelector('h1');
ctah.textContent = siteContent['cta'] ['h1'];

const ctabutt = document.querySelector('button');
ctabutt.textContent = siteContent['cta'] ['button'];

const ctaimg = document.getElementById('cta-img');
ctaimg.setAttribute('src', siteContent['cta']['img-src'])
//cta-img in html

const meowmain = document.querySelectorAll('h4')
meowmain[0].textContent = siteContent['main-content'] ['features-h4']
meowmain[1].textContent = siteContent['main-content'] ['about-h4']
meowmain[2].textContent = siteContent['main-content'] ['services-h4']
meowmain[3].textContent = siteContent['main-content'] ['product-h4']
meowmain[4].textContent = siteContent['main-content'] ['vision-h4']

const meowcontent = document.querySelectorAll('p')
meowcontent[0].textContent = siteContent['main-content'] ['features-content']
meowcontent[1].textContent = siteContent['main-content'] ['about-content']
meowcontent[2].textContent = siteContent['main-content'] ['services-content']
meowcontent[3].textContent = siteContent['main-content'] ['product-content']
meowcontent[4].textContent = siteContent['main-content'] ['vision-content']

const middlei = document.getElementById('middle-img');
middlei.setAttribute('src', siteContent['main-content']['middle-img-src'])


const meowcontact = document.querySelectorAll('.contact h4')
meowcontact[0].textContent = siteContent['contact'] ['contact-h4']


// const meowcontact = document.querySelector('.contact h4')
// meowcontact.textContent = siteContent['contact'] ['contact-h4']
//prob the right way to do it



const meowadd = document.querySelectorAll('.contact p')
meowadd[0].textContent = siteContent['contact'] ['address']
meowadd[1].textContent = siteContent['contact'] ['phone']
meowadd[2].textContent = siteContent['contact'] ['email']


const meowfooter = document.querySelector('footer')
meowfooter.textContent = siteContent['footer'] ['copyright']

// const meownavs = document.querySelectorAll('nav a');
// meownavs[0].textContent = siteContent['nav'] ['nav-item-1']
// meownavs[1].textContent = siteContent['nav'] ['nav-item-2']
// meownavs[2].textContent = siteContent['nav'] ['nav-item-3']
// meownavs[3].textContent = siteContent['nav'] ['nav-item-4']
// meownavs[4].textContent = siteContent['nav'] ['nav-item-5']
// meownavs[5].textContent = siteContent['nav'] ['nav-item-6']

document.querySelectorAll('nav a').forEach ( element => {
  element.style.color = "green";});


// document.querySelector('nav a').appendChild(nav) [7] 

const childElement = document.createElement('a');
childElement.textContent = "Meow"
//Use createElement when creating something new to add it on without erasing other things


const parentElement = document.querySelector('nav');
parentElement.appendChild(childElement)

const secondItem = document.createElement('a');
secondItem.textContent = "Kitty"

parentElement.prepend(secondItem)


