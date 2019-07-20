// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerInsert = document.querySelector('.header-container')

headerInsert.appendChild(header())

function header() {
    const header = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerTemp = document.createElement('span')
    
    header.classList.add(header)
    headerDate.classList.add(date)
    headerTemp.classList.add(temp)

    header.appendChild(headerDate)
    header.appendChild(headerTitle)
    header.appendChild(headerTemp)

    return header
}

