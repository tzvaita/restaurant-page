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
}

const showMenu = () => {
  document.getElementById('homecont').style.display = 'none';
  document.getElementById('contactcont').style.display = 'none';
  document.getElementById('menucont').style.display = 'grid';
}

const showContact = () => {
  document.getElementById('homecont').style.display = 'none';
  document.getElementById('contactcont').style.display = 'grid';
  document.getElementById('menucont').style.display = 'none';
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
