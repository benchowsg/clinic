// header.js


// Function to generate the navigation menu
function generateNavigation() {
  // Get the container element
  var container = document.querySelector('.nav-menu');

  // Create the navigation items
  var navItems = [
    { text: 'Who We Are', link: '/who-we-are' },
    {
      text: 'Preventive Medicine',
      link: '/preventive-medicine',
      dropdown: [
        { text: 'Preventive Medicine', link: '/preventive-medicine' },
        { text: 'General Health', link: '/general-health' },
        { text: 'Health Screening', link: '/health-screening' },
        { text: 'Heart Health Screening', link: '/heart-health-screening' },
        { text: 'Osteoporosis', link: '/osteoporosis' },
        { text: 'Vaccination', link: '/vaccination' },
        { text: 'COVID-19 Related', link: '/covid-19' }
      ]
    },
    {
      text: 'Intermediate Care',
      link: '/intermediate-care-services',
      dropdown: [
        { text: 'Intermediate Care Services', link: '/intermediate-care-services' },
        { text: 'Cardiology', link: '/chronic-cardiology-care' },
        { text: 'Endoscopy', link: '/endoscopy' },
        { text: 'Ophthalmology', link: '/ophthalmology' },
        { text: 'Physiotherapy', link: '/physiotherapy' },
        { text: 'Rapid Blood Test Services', link: '/rapid-blood-test-services' },
        { text: 'Hormonal and Wellness', link: '/hormonal-and-wellness' },
        { text: 'Post-Hospitalisation Care', link: '/post-hospitalisation-recovery' }
      ]
    },
    { text: 'Location', link: '/location' },
    { text: 'Book Online', link: '/booking' }
  ];

  // Create the navigation menu
  var menu = document.createElement('ul');
  menu.classList.add('nav-menu');
  navItems.forEach(function(item) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = item.text;
    a.href = item.link;
    li.appendChild(a);

    // Check if item has dropdown
    if (item.dropdown) {
      li.classList.add('drop-down');
      var dropdown = document.createElement('ul');
      item.dropdown.forEach(function(dropdownItem) {
        var dropdownLi = document.createElement('li');
        var dropdownA = document.createElement('a');
        dropdownA.textContent = dropdownItem.text;
        dropdownA.href = dropdownItem.link;
        dropdownLi.appendChild(dropdownA);
        dropdown.appendChild(dropdownLi);
      });
      li.appendChild(dropdown);
    }

    menu.appendChild(li);
  });

  // Append the navigation menu to the container
  container.appendChild(menu);
}

// Call the function to generate the navigation menu
generateNavigation();

