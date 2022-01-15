$(function() {
    // Scrollbar animation
    const skillFront = document.getElementById("front");
    const progressBars = document.querySelectorAll('.progress-bar');
    const burgerMenu = document.querySelector('.menu-btn');
    let menuOpen = false;

    $(burgerMenu).click(() => {
        if(!menuOpen) {
            burgerMenu.classList.add('open');
            document.querySelector('header').style.transform = 'translateX(-84%)';
            document.querySelector('body').style.paddingLeft = '0rem';
            menuOpen = true;
            
        } else {
            burgerMenu.classList.remove('open');
            document.querySelector('header').style.transform = 'translateX(0%)';
            document.querySelector('.picture, .img-asperger, .img-dice').style.transform = 'translateX(0%)'
            document.querySelector('body').style.paddingLeft = '28rem'
            menuOpen = false
        }
    })
    
    showProgress = () => {
        progressBars.forEach(progressBar => {
            const value = progressBar.dataset.progress
            progressBar.style.opacity = 1;
            progressBar.style.width = `${value}%`
        })
    }
    
    hideProgress = () => {
        progressBars.forEach(p => {
            p.style.opacity = 0;
            p.style.width = 0;
        });
    }
    
    hideParagraph = () => {
        showPara.forEach(showP => {
            showP.style.opacity = 0;
        })
    }
    
    window.addEventListener('scroll', ()=> {
        const sectionPos = skillFront.getBoundingClientRect().top;
        const screenPos = window.innerHeight;

        if(sectionPos < screenPos) {
            showProgress();
        } else {
            hideProgress();
        }

        if(sectionPos < screenPos) {
            showProgress();
        } else {
            hideProgress()
        }
    })

});
