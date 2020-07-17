const landingpage = () => {
  const homecontainer = document.createElement('div');
  homecontainer.id = 'homecont'
  const pageText = document.createElement('p');
  pageText.innerHTML = "Welcome welcome.";
  homecontainer.appendChild(pageText);
  document.body.appendChild(homecontainer);
}

export default landingpage;