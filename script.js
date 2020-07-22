const shareButton = document.querySelector('div.shareBtn')
const sharePanel = document.querySelector('div.shareBox')
const shareIcon = document.querySelector('.shareBtn img')
shareButton.addEventListener('click',e =>{

    if(sharePanel.style.visibility === 'visible'){
        sharePanel.style.visibility = 'hidden'
        shareButton.className = 'shareBtn'
        shareIcon.src = './images/icon-share.svg'

    }
    else {
        sharePanel.style.visibility = 'visible'
        shareButton.className = 'shareBtn active'
        shareIcon.src = './images/icon-share-active.svg'
    }
})