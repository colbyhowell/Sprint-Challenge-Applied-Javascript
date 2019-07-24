// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const appendedTopics = document.querySelector('.topics')

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        const topicFeed = data.data.topics
            
        topicFeed.forEach(data => {
            const newFeeds = tabCreator(data)

            appendedTopics.appendChild(newFeeds)
        })
    })
    .catch(error => {
        console.log(`There appears to be a problem`, error)
    })

    function tabCreator(data){
        const newTabs = document.createElement('div')

        newTabs.classList.add('tab')

        newTabs.textContent = data

        return newTabs
    }