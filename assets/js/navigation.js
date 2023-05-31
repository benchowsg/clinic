// navigation.js

// Function to generate the navigation menu
function generateNavigationMenu() {
  var navMenu = document.createElement('nav');
  navMenu.classList.add('nav-menu', 'd-none', 'd-lg-block');

  var ul = document.createElement('ul');

  // Menu items
  var whoWeAre = createMenuItem('Who We Are', '/who-we-are');

  var preventiveMedicine = createDropdownMenuItem('Preventive Medicine', [
    createMenuItem('Preventive Medicine', '/preventive-medicine'),
    createMenuItem('General Health', '/general-health'),
    createMenuItem('Health Screening', '/health-screening'),
    createMenuItem('Heart Health Screening', '/heart-health-screening'),
    createMenuItem('Osteoporosis', '/osteoporosis'),
    createMenuItem('Vaccination', '/vaccination'),
    createMenuItem('COVID-19 Related', '/covid-19')
  ]);

  var intermediateCare = createDropdownMenuItem('Intermediate Care', [
    createMenuItem('Intermediate Care Services', '/intermediate-care-services'),
    createMenuItem('Cardiology', '/chronic-cardiology-care'),
    createMenuItem('Endoscopy', '/endoscopy'),
    createMenuItem('Ophthalmology', '/ophthalmology'),
    createMenuItem('Physiotherapy', '/physiotherapy'),
    createMenuItem('Rapid Blood Test Services', '/rapid-blood-test-services'),
    createMenuItem('Hormonal and Wellness', '/hormonal-and-wellness'),
    createMenuItem('Post-Hospitalisation Care', '/post-hospitalisation-recovery')
  ]);

  var location = createMenuItem('Location', '/location');
  var bookOnline = createMenuItem('Book Online', '/booking');

  // Append menu items to the unordered list
  ul.appendChild(whoWeAre);
  ul.appendChild(preventiveMedicine);
  ul.appendChild(intermediateCare);
  ul.appendChild(location);
  ul.appendChild(bookOnline);

  // Append the unordered list to the navigation menu
  navMenu.appendChild(ul);

  // Append the navigation menu to the desired location in your HTML
  document.getElementById('navigation').appendChild(navMenu);
}

// Function to create a menu item
function createMenuItem(text, url) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  a.textContent = text;
  a.href = url;
  li.appendChild(a);
  return li;
}

// Function to create a dropdown menu item with sub-items
function createDropdownMenuItem(text, subItems) {
  var li = document.createElement('li');
  li.classList.add('drop-down');
  var a = document.createElement('a');
  a.href = '#';
  a.innerHTML = '<span>' + text + '</span><i class="bi bi-chevron-down"></i>';
  li.appendChild(a);

  var subMenu = document.createElement('ul');
  subItems.forEach(function(subItem) {
    subMenu.appendChild(subItem);
  });

  li.appendChild(subMenu);
  return li;
}

// Call the function to generate the navigation menu
generateNavigationMenu();
