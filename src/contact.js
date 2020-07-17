const contactinfo = () => {
  const contactpage = document.createElement('div');
  contactpage.id = 'contactcont'
  const pageext = document.createElement('p');
  pageext.innerHTML = "Give us a call for deliveries and enquiries";
  contactpage.appendChild(pageext);
  document.body.appendChild(contactpage);
}

export default contactinfo;