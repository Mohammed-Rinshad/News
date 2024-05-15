let home = document.getElementById('home')
let trending = document.getElementById('trending')
let sports = document.getElementById('sports')
let india = document.getElementById('india')
let entertainment = document.getElementById('entertainment')
let technology = document.getElementById('technology')
let newsBody = document.getElementById('news-body')
let newsImg = document.getElementById('news-img')
let newsTitle = document.getElementById('h1-news')



async function newsData(menuToshow){
    let currentDate = new Date();
    let apiKey = 'd91c889a547145298f91beedaf7d0c03'
    // let apiKey2 = '614e6a6713c54d94b449f5cffe92568b'
    const url = `https://newsapi.org/v2/everything?q=${menuToshow}&from=${currentDate}&sortBy=publishedAt&apiKey=${apiKey}`
    let response = await fetch(url)
    let dataNews = await response.json()
    
    if(menuToshow === 'home'){
        home.style.color = "black"
        // home.style.backgroundColor = "black"
        trending.style.color = "rgb(122, 121, 121)"
        // trending.style.backgroundColor = "white"
        sports.style.color = "rgb(122, 121, 121)"
        // sports.style.backgroundColor = "white"
        india.style.color = "rgb(122, 121, 121)"
        // india.style.backgroundColor = "white"
        entertainment.style.color = "rgb(122, 121, 121)"
        // entertainment.style.backgroundColor = "white"
        technology.style.color = "rgb(122, 121, 121)"
        // technology.style.backgroundColor = "white"
    } else if(menuToshow === 'trending'){
        trending.style.color = "black"
        // trending.style.backgroundColor = "black"
        home.style.color = "rgb(122, 121, 121)"
        // home.style.backgroundColor = "white"
        sports.style.color = "rgb(122, 121, 121)"
        // sports.style.backgroundColor = "white"
        india.style.color = "rgb(122, 121, 121)"
        // india.style.backgroundColor = "white"
        entertainment.style.color = "rgb(122, 121, 121)"
        // entertainment.style.backgroundColor = "white"
        technology.style.color = "rgb(122, 121, 121)"
        // technology.style.backgroundColor = "white"
    } else if(menuToshow === 'sports'){
        sports.style.color = "black"
        // sports.style.backgroundColor = "black"
        trending.style.color = "rgb(122, 121, 121)"
        // trending.style.backgroundColor = "white"
        home.style.color = "rgb(122, 121, 121)"
        // home.style.backgroundColor = "white"
        india.style.color = "rgb(122, 121, 121)"
        // india.style.backgroundColor = "white"
        entertainment.style.color = "rgb(122, 121, 121)"
        // entertainment.style.backgroundColor = "white"
        technology.style.color = "rgb(122, 121, 121)"
        // technology.style.backgroundColor = "white"
    }else if(menuToshow === 'india'){
        sports.style.color = "rgb(122, 121, 121)"
        // sports.style.backgroundColor = "white"
        trending.style.color = "rgb(122, 121, 121)"
        // trending.style.backgroundColor = "white"
        home.style.color = "rgb(122, 121, 121)"
        // home.style.backgroundColor = "white"
        india.style.color = "black"
        // india.style.backgroundColor = "black"
        entertainment.style.color = "rgb(122, 121, 121)"
        // entertainment.style.backgroundColor = "white"
        technology.style.color = "rgb(122, 121, 121)"
        // technology.style.backgroundColor = "white"
    }else if(menuToshow === 'entertainment'){
        entertainment.style.color = "black"
        // entertainment.style.backgroundColor = "black"
        sports.style.color = "rgb(122, 121, 121)"
        // sports.style.backgroundColor = "white"
        trending.style.color = "rgb(122, 121, 121)"
        // trending.style.backgroundColor = "white"
        home.style.color = "rgb(122, 121, 121)"
        // home.style.backgroundColor = "white"
        india.style.color = "rgb(122, 121, 121)"
        // india.style.backgroundColor = "white"
        technology.style.color = "rgb(122, 121, 121)"
        // technology.style.backgroundColor = "white"

    }else if(menuToshow === 'technology'){
        technology.style.color = "black"
        // technology.style.backgroundColor = "black"
        entertainment.style.color = "rgb(122, 121, 121)"
        // entertainment.style.backgroundColor = "white"
        sports.style.color = "rgb(122, 121, 121)"
        // sports.style.backgroundColor = "white"
        trending.style.color = "rgb(122, 121, 121)"
        // trending.style.backgroundColor = "white"
        home.style.color = "rgb(122, 121, 121)"
        // home.style.backgroundColor = "white"
        india.style.color = "rgb(122, 121, 121)"
        // india.style.backgroundColor = "white"
    }

    // alert('function Ok')
    for (let i = 0; i < dataNews.articles.length ; i++) {
    // console.log(dataNews.articles[i].title)
    // console.log(dataNews.articles[i].urlToImage)
    console.log(dataNews.articles);
    
    let newDiv = document.createElement('div')
    newsBody.appendChild(newDiv)
    newDiv.classList.add('news-body')

    let createImg = document.createElement('img')
    newsImg.appendChild(createImg)
    createImg.classList.add('news-img')

    let createTitle = document.createElement('h1')
    newsTitle.appendChild(createTitle)
    createTitle.classList.add('h1-news')

    createTitle = dataNews.articles[i].title
    newDiv.textContent = createTitle
    createImg.src = dataNews.articles[i].urlToImage
    newDiv.appendChild(createImg)

    if(dataNews.articles[i].urlToImage === null && dataNews.articles[i].title !== "[Removed]"){
        createImg.src = "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
    }else if(dataNews.articles[i].title === "[Removed]"){
        createImg.src = "https://filestore.community.support.microsoft.com/api/images/2f12ab59-a2a9-4f40-847f-76dc75093468?upload=true"
    }
    
    newDiv.addEventListener('click' ,() => {
        window.open(dataNews.articles[i].url)

    })
    

    }
 
}
// newsData()

    // let newNewsBody = document.createElement('div')
    // newsBody.appendChild(newNewsBody)
    // let newNewsTitle = document.createElement('h1')
    // newNewsTitle.textContent = dataNews.articles[i].title
    // newsTitle.appendChild(newNewsTitle)
    // let newNewimg = document.createElement('img')
    // newsImg.appendChild(newNewimg)
    // newsImg.src = dataNews.articles[i].urlToImage
    // console.log(dataNews)