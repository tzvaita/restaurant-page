import Deli from './images/deliver.jpg';

const contactinfo = () => {
  const contactpage = document.createElement('div');
  contactpage.id = 'contactcont';
  const deliver = document.createElement('img');
  deliver.src = Deli;
  const pageext = document.createElement('h1');
  pageext.innerHTML = 'Give us a call for deliveries and enquiries';
  contactpage.appendChild(deliver);
  contactpage.appendChild(pageext);

  return contactpage;
};

export default contactinfo;