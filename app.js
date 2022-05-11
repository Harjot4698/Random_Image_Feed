const unsplashURL = 'https://source.unsplash.com/random/'
const container=document.querySelector('.container')
const rows=10;

for (let i=0; i<rows*3;i++){
    const img=document.createElement('img')
    img.src=`${unsplashURL}${getRandomNr()}`
    container.appendChild(img)
}

function getrandomSize(){
    return `${getRandomNr()}X${getRandomNr()}`

}

function getRandomNr(){
    return Math.floor(Math.random()*10)+300
}