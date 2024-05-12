let home = document.getElementById('home')
let trending = document.getElementById('trending')
let sports = document.getElementById('sports')
let india = document.getElementById('india')
let entertainment = document.getElementById('entertainment')
let technology = document.getElementById('technology')




async function getnewsData(menuToshow){
    let currentDate = new Date();
    let apiKey = '614e6a6713c54d94b449f5cffe92568b'
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
    for (let i = 0; i < dataNews.articles.length; i++) {
    //console.log(dataNews.articles[i].title)
    console.log(dataNews)
    }

}
// getnewsData()

