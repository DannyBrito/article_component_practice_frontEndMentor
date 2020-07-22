const shareButton = document.querySelector('div.shareBtn')
const sharePanel = document.querySelector('div.shareBox')
const shareIcon = document.querySelector('.shareBtn img')
const mobileSharePanel = document.querySelector('.mobileShareBox')
const mobileShareButton = document.querySelector('.mobileShareBtn')
const authorContainer = document.querySelector('.cardAuthorContainer')

shareButton.addEventListener('click',e =>{
    if(window.innerWidth <= 550){
        mobileSharePanel.style.display = 'flex'
        authorContainer.style.display = 'none'
    }
    else{
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
    }
})


mobileShareButton.addEventListener('click',e =>{
    mobileSharePanel.style.display = 'none'
    authorContainer.style.display = 'flex'
    shareButton.className = 'shareBtn'
})

window.addEventListener('resize',e =>{
    if(window.innerWidth <= 550 && sharePanel.style.visibility === 'visible'){
        mobileSharePanel.style.display = 'flex'
        authorContainer.style.display = 'none'
        sharePanel.style.visibility = 'hidden'
    }
    else if(window.innerWidth > 550 && mobileSharePanel.style.display === 'flex'){
        mobileSharePanel.style.display = 'none'
        authorContainer.style.display = 'flex'
        sharePanel.style.visibility = 'visible'
        shareButton.className = 'shareBtn active'
        shareIcon.src = './images/icon-share-active.svg'
    }
})
