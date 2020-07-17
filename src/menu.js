import Img from './images/menu.jpg';

const menuListing = () => {
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menucont';
  const image = document.createElement('img');
  image.src = Img;
  menuContainer.appendChild(image);

  return menuContainer;
}

export default menuListing;