// topbar.js

// Function to generate the top bar
function generateTopBar() {
  var topBar = document.createElement('div');
  topBar.id = 'topbar';
  topBar.classList.add('d-none', 'd-lg-flex', 'align-items-center', 'fixed-top');

  var container = document.createElement('div');
  container.classList.add('container', 'd-flex');

  // Create the content of the top bar
  var contactInfo = createContactInfo();
  var socialLinks = createSocialLinks();

  // Append the content to the container
  container.appendChild(contactInfo);
  container.appendChild(socialLinks);

  // Append the container to the top bar
  topBar.appendChild(container);

  // Append the top bar to the body of the page
  document.body.insertBefore(topBar, document.body.firstChild);
}

// Function to create the contact info element
function createContactInfo() {
  var contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info', 'mr-auto');

  var emailIcon = createIcon('icofont-envelope');
  var emailLink = createLink('mailto:contact@ahealingheartmedical.com', 'contact@ahealingheartmedical.com');

  var phoneIcon = createIcon('icofont-phone');
  var phoneLink = createLink('tel:+6569621362', '+65 6962 1362');

  // Append the elements to the contact info div
  contactInfo.appendChild(emailIcon);
  contactInfo.appendChild(emailLink);
  contactInfo.appendChild(phoneIcon);
  contactInfo.appendChild(phoneLink);

  return contactInfo;
}

// Function to create the social links element
function createSocialLinks() {
  var socialLinks = document.createElement('div');
  socialLinks.classList.add('social-links');

  var facebookLink = createSocialLink('https://www.facebook.com/ahealingheartmedical', 'icofont-facebook');
  var instagramLink = createSocialLink('https://www.instagram.com/ahealingheartmedical/', 'icofont-instagram');
  var linkedinLink = createSocialLink('https://www.linkedin.com/company/ahealingheartmedical', 'icofont-linkedin');

  // Append the social links to the div
  socialLinks.appendChild(facebookLink);
  socialLinks.appendChild(instagramLink);
  socialLinks.appendChild(linkedinLink);

  return socialLinks;
}

// Function to create an icon element
function createIcon(iconClass) {
  var icon = document.createElement('i');
  icon.classList.add(iconClass);
  return icon;
}

// Function to create a link element
function createLink(url, text) {
  var link = document.createElement('a');
  link.href = url;
  link.textContent = text;
  return link;
}

// Function to create a social link element
function createSocialLink(url, iconClass) {
  var link = document.createElement('a');
  link.href = url;

  var icon = document.createElement('i');
  icon.classList.add(iconClass);

  link.appendChild(icon);
  return link;
}

// Call the function to generate the top bar
generateTopBar();
