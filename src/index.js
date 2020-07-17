import header from './header';
import menuListing from './menu';
import contactinfo from './contact';
import landingpage from './home';
import './style.css';

const closeModels = () => {
  document.getElementById('homecont').style.display = 'grid';
  document.getElementById('contactcont').style.display = 'none';
  document.getElementById('menucont').style.display = 'none';
}

const showHome = () => {
  document.getElementById('homecont').style.display = 'grid';
  document.getElementById('contactcont').style.display = 'none';
  document.getElementById('menucont').style.display = 'none';
  document.getElementById('home').style.backgroundColor = 'red';
  document.getElementById('menu').style.backgroundColor = 'transparent';
  document.getElementById('contact').style.backgroundColor = 'transparent';
}

const showMenu = () => {
  document.getElementById('homecont').style.display = 'none';
  document.getElementById('contactcont').style.display = 'none';
  document.getElementById('menucont').style.display = 'grid';
  document.getElementById('menu').style.backgroundColor = 'yellow';
  document.getElementById('home').style.backgroundColor = 'transparent';
  document.getElementById('contact').style.backgroundColor = 'transparent';
}

const showContact = () => {
  document.getElementById('homecont').style.display = 'none';
  document.getElementById('contactcont').style.display = 'grid';
  document.getElementById('menucont').style.display = 'none';
  document.getElementById('contact').style.backgroundColor = 'antiquewhite';
  document.getElementById('home').style.backgroundColor = 'transparent';
  document.getElementById('menu').style.backgroundColor = 'transparent';
}

const display = () => {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(landingpage());
  content.appendChild(menuListing());
  content.appendChild(contactinfo());

  content.querySelector('#home').addEventListener('click', showHome);
  content.querySelector('#menu').addEventListener('click', showMenu);
  content.querySelector('#contact').addEventListener('click', showContact);
}

display();
closeModels();
