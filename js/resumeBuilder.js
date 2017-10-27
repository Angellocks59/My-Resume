var bio = {
    "name": "Angelina Malcolm",
	"role": "Senior Specialist Network Support",
	"contacts": {		
		"mobile": "678-596-2258",
		"email": "pigletti@bellsouth.net",		
		"github": "https://github.com/Angellocks59",
		"twitter": "https://twitter.com/@angellocks59",
		"location": "Conyers, GA"
	},
    
	"welcomeMessage": "Welcome! Thanks for viewing my resume.",
    "skills": ["Network Surveillance", "WMS", "Ruby", "TMAS"], 
    "biopic": "images/biopic.jpg" 
};
var education = {
	"schools": [{
		"name": "National Louis University",
		"location": "Chicago, IL",
		"degree": "BA",
		"majors": ["Behavorial Science"],
		"dates": "2000-2002",
		"url": "http://www.nl.edu"
	  }, {
        "name": "Georgia State University",
        "location": "Atlanta, GA, US",
        "degree": "None",
        "majors": ["Psychology"],
        "dates": "1977-1982",
        "url": "http://www.gsu.edu"
      }],
        
   "onlineCourses": [{
      "title": "Intro to Programming Nanodegree",
      "school": "Udacity",
      "dates": "2017",
      "url": "http://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }
  
  ]

};

var projects = {
	"projects": [{
		"title": "My Class Notes",
		"dates": "2017",
		"description": "Notes from my Introduction to Programming class.",
		'images':[] }, {"title":"My Second Project","dates":"2017",	
		"description": "My Stylish Webpage",'images':[]}, {"title":"Movies",
		"dates":"2017",		  
        "description": "A website of my favorite movies",'images':[]

	 }
	
  ]};

var work = {
	"jobs": [{ 
	    "employer": "AT&T",
        "title": "Senior Specialist Network Support",
        "dates": "March 2013 - Future",
        "location": "Conyers, GA",        
        "description": "Network Surveillance and power monitoring.", 
            "Providing Tier 2 support for technicians.", 
            "Establishing maintenance and repair bridges."
       },
	   {
	   	 "employer": "Vasoli Electric",
	   	 "title": "Contractor - AT&T Business Analysis Management",
	   	 "dates": "February 2007 - March 2013",
	   	 "location": "Conyers, GA",	   	
	     "description": "Network Surveillance and power monitoring.", 
	         "Providing Tier 2 support for technicians.", 
	         "Establishing maintenance and repair bridges."
	    }, 
	    {
	      "employer": "The Answer Group (TAG)",
	      "title": "Technical Support Agent",
	      "dates": "February 2006 - February 2007",
	      "location": "Lauderhill, FL",	      
	      "description": "Telephone technical support for internet customers.", 
              "Upsale products and services.",
	          "Answer basic account and billing questions."   
	 }]

};	    

 bio.display = function() {
 	$("#header").prepend(HTMLbioPic.replace('%data%', bio.biopic));
 	$("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
 	$("#header").prepend(HTMLheaderName.replace('%data%', bio.name));
 
 
    
    $("#header").append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    $("#header").append(HTMLskillsStart.replace('%data', bio.skillsstart));   
  
    for (var i = 0; i < bio.skills.length; i++) {
    	$('#skills').prepend(HTMLskills.replace('%data%', bio.skills[i]));
    }

    var email = HTMLemail.replace('%data%', bio.contacts.email);
    var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var github = HTMLgithub.replace('%data%', bio.contacts.github);
    var twitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var location_home = HTMLlocation.replace('%data%', bio.contacts.location); 


    var contactsArray = [email, mobile, github, twitter, location_home];

    for (var i = 0; i < contactsArray.length; i++) {
    	$("#topContacts").append(contactsArray[i]);
    	$("#footerContacts").append(contactsArray[i]);

    }

 };
 bio.display();


 work.display = function() {
 	$('#work').append(HTMLworkStart);
 	for (var i = 0; i < work.jobs.length; i++) {
 		$('.work-entry').append(HTMLworkEmployer.replace('%data%', work.jobs[i].employer));
 		$('.work-entry').append(HTMLworkTitle.replace('%data%', work.jobs[i].title));
 		$('.work-entry').append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
 		$('.work-entry').append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
 		$('.work-entry').append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
 	    }
    
    }   
 
 };
 work.display();


  projects.display = function() {
 	$('#projects').append(HTMLprojectStart);
 	for (var i = 0; i < projects.projects.length; i++) {
 		$('.project-entry').append(HTMLprojectTitle.replace('%data%', projects.projects[i].title));
        $('.project-entry').append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));   
        $('.project-entry').append(HTMLprojectDescription.replace('%data%', projects.projects[i].description)); 
        for (var j = 0; j < projects.projects[i].images.length; j++) {
            $('.project-entry').append(HTMLprojectImage.replace('%data%', projects.projects[i].images[j]));
    	} 
    
    } 

 };
 projects.display();
 

 education.display = function() {
 	$("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {

    	 $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree), HTMLschoolDates.replace("%data%", education.schools[i].dates), HTMLschoolLocation.replace("%data%", education.schools[i].location), HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }

    $(".education-entry").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {

    	$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school), HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates), HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url));
    }
};
education.display();

$('#mapDiv').append(googleMap);