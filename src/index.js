import header from './header';
import menuListing from './menu';
import contactinfo from './contact';
import landingpage from './home';

function loading() {
  header();
}
loading();
contactinfo();
menuListing();
landingpage();



const menupage = document.getElementById('menu');
const contactpage = document.getElementById('contact');
const homepage = document.getElementById('home');
const menucont = document.getElementById('menucont');
const homecont = document.getElementById('homecont');
const contactcont = document.getElementById('contactcont');

const menubutton = () => {
  contactcont.style.display = 'none';
  homecont.style.display = 'none';
  menucont.style.display = 'block';
}

const contactbutton = () => {
  homecont.style.display = 'none';
  menucont.style.display = 'none';
  contactcont.style.display = 'block';
}

const homebutton = () => {
  contactcont.style.display = 'none';
  menucont.style.display = 'none';
  homecont.style.display = 'block';
  
}

menupage.addEventListener("click", menubutton);
contactpage.addEventListener("click", contactbutton);
homepage.addEventListener("click", homebutton);

