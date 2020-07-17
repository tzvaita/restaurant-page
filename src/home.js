import Pic from './images/rest.png';

const landingpage = () => {
  const homecontainer = document.createElement('div');
  homecontainer.id = 'homecont';
  const image = document.createElement('img');
  image.className = 'homepic';
  image.src = Pic;
  homecontainer.appendChild(image);

  return homecontainer;
};

export default landingpage;