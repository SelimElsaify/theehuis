// created by Selim Elsaify for Techgrounds assigments 

 $(document).ready(function(){
    var d = document;
    var assignments = assignmentJSON.assignments; 
    /* 	======================================================================
    Object Sniffing
    =========================================================================== */
    if (!d.getElementById('assignments') || typeof assignments != 'object') return ('Oeps!! Page was not found');

    if ($('#assignments').length <= 0) return ('! sorry, no results to be shown, check your internet connection then try again');

   console.log('document is geladen');

    /*======================================================================
    Initialisation
    =========================================================================== */
    var titleLengte = 17;
    var descriptionLengte = 100;

    $(".noJS").remove(); // foutemelding verwijderen

 
       $("#assignments").append('<div id="assignmentsContainer"></div>');
    
        // cards maken
    
    for (hetAssignment of assignments) {
         
        let url, id, title, img, description, rating, category, titleShort, descriptionShort, isbn;

        // maak een seo vriendelijk url 
        url = hetAssignment.title.toLocaleLowerCase();
        url = url.replace(/ /g, '-'); // remove all spaces between words
        url = escape(url); // to remove all special signs such as ? 

        titleShort = hetAssignment.title;
        if (titleShort.length > titleLengte) {
            let mijnTitle = titleShort.lastIndexOf(' ', titleShort); // find space
            titleShort = titleShort.substring(0, titleLengte) + '...';
        }

        descriptionShort = hetAssignment.description;
        if (descriptionShort.length > descriptionLengte) {
            let mijnIndex = descriptionShort.lastIndexOf(' ', descriptionLengte); // find space
            descriptionShort = descriptionShort.substring(0, descriptionLengte) + '...';
        }

        let card = `<div class="card"  id="hetAssignmentId-${hetAssignment.isbn}" data-rating="${hetAssignment.rating}" data-rating-flag="0" data-author="${hetAssignment.author}" data-author-flag="0" data-category="${hetAssignment.category}" category-rating-flag="0" data-price="${hetAssignment.price}" price-rating-flag="0" 
        title="${hetAssignment.title}">`;

        card += `<h2>${titleShort}</h2>`;
        card += '<img src="' + hetAssignment.image + '" alt= "assignment">';
        card += '<p>' + descriptionShort + '</p>';

        card +=`<div><a href="hetAssignment.html?id=${hetAssignment.id}" class="button">${hetAssignment.title}</a></div>`;

        card += '</div>';

      
        // console.log(card);  

        $('#assignmentsContainer').append(card);

       // console.log(titleShort);  
       // console.log("You are awsome man "); 

    }
          
 }); // end document ready












