// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container')

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
            Object.entries(data.data.articles)
            .forEach(([key, value]) => {
                var newArr = data.data.articles[key];
                console.log(newArr)
                    newArr.forEach(arts => {
                        const arrayArticles = articleCreator(arts)

                        cardContainer.appendChild(arrayArticles)
                    })
                
            })

        })
    .catch(error => {
        console.log('There was an error with your articles', error)
    })

    function articleCreator(data){
        const article = 
        document.createElement('div')
        const articleHeadline = 
        document.createElement('div')
        const articleAuthor = 
        document.createElement('div')
        const articleImgContainer = 
        document.createElement('div')
        const articleImgLink = 
        document.createElement('img')
        const articleAuthorName = 
        document.createElement('span')

        article.classList.add('card')
        articleHeadline.classList.add('headline')
        articleAuthor.classList.add('author')
        articleImgContainer.classList.add('img-container')
        
        articleHeadline.textContent =
         data.headline
        articleImgLink.src =
         data.authorPhoto
        articleAuthorName.textContent =
         data.authorName

        article.appendChild(articleHeadline)
        article.appendChild(articleAuthor)
        articleAuthor.appendChild(articleImgContainer)
        articleImgContainer.appendChild(articleImgLink)
        articleAuthor.appendChild(articleAuthorName)

        return article
    }