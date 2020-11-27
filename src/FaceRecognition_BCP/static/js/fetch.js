let headerHome = document.querySelector('#header-home');
let headerExplore = document.querySelector('#header-explore');
let headerContact = document.querySelector('#header-contact');
let headerLogin = document.querySelector('#header-login');


let linkArray = [headerHome, headerExplore, headerContact, headerLogin];

linkArray.forEach((eachLink) => {
    eachLink.addEventListener('click', (e) => {
        switch (eachLink) {
            case headerHome:
                fetchPage(eachLink, 'index.html');
                break;

            case headerExplore:
                fetchPage(eachLink, 'aboutus.html');
                break;

            case headerContact:
                fetchPage(eachLink, 'contact.html');
                break;

            case headerLogin:
                fetchPage(eachLink, 'login.html');
                break;
        }
    })
})

function fetchPage(link, page){
    let baseURL = '${window.location.protocol}//${window.location.hostname}';

    if(window.location.port) {
        baseURL += ':${window.location.port}';
    }

    fetch('${baseURL}/${page}')
        .then(function(response){
            return response.text()
        })
        .then(function(html){
            let doc = new DOMParser().parseFromString(html, "text/html");

            anime({
				targets: '.container',
				translateX: 700,
				opacity: 0,
				easing: 'easeInExpo',
				duration: 700,
				complete: (anim) => {
					document.querySelector('body').remove();
				}
			})

			setTimeout(function () {
				document.querySelector('body').insertBefore(doc.querySelector('.new-content'), document.querySelector('.gallery-nav'));

				anime({
					targets: '.new-content .text-section h1, .new-content .text-section p, .new-content .text-section div',
					translateX: [-600, 0],
					delay: (el, i) => 100 * i,
					opacity: [0, 1],
					easing: 'easeOutExpo',
				})
			}, 700);
        })
}