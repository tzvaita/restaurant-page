const header = () => {
  const headerdiv = document.createElement('header');
  const navbar = document.createElement('nav');
  navbar.className = 'navi';
  const navdiv = document.createElement('div');
  navdiv.className = 'navconti';
    navdiv.innerHTML =    `<a id="home" href="#">Home</a>
                          <a id="menu" href="#">Menu</a>
                          <a id="contact" href="#">Contact</a>`;
    navbar.appendChild(navdiv)
    headerdiv.appendChild(navbar);
    document.body.appendChild(headerdiv);
  return navbar;
}

export default header;