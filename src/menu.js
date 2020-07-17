const menuListing = () => {
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menucont';
  const pageText = document.createElement('p');
  pageText.innerHTML = "We have a plethora of dishes from where you can select different courses.";
  menuContainer.appendChild(pageText);
  document.body.appendChild(menuContainer);
}

export default menuListing;