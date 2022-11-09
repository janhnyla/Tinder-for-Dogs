import dogs from './data.js'
import Dog from './Dog.js'
const isWaiting = false

document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        document.getElementById('btn1').disabled = true
        document.getElementById('btn2').disabled = true
        let count = e.target.dataset.like
        let endCount = (parseInt(e.target.dataset.like)+1)
        document.getElementById('liked').style.display = "block"
        dogs[count].hasBeenSwiped = true
        dogs[count].hasBeenLiked = true
        endCount === dogs.length ? setTimeout(()=>endDogs(),2000) : setTimeout(()=>(getNewProfile(count)),2000)
        
    }
    else if(e.target.dataset.nope){
        document.getElementById('btn1').disabled = true
        document.getElementById('btn2').disabled = true
        let count = e.target.dataset.nope
        let endCount = (parseInt(e.target.dataset.nope)+1)
        document.getElementById('nope').style.display = "block"
        dogs[count].hasBeenSwiped = true

        endCount === dogs.length ? setTimeout(()=>endDogs(),2000) : setTimeout(()=>(getNewProfile(count)),2000)

            }
    }
)

function getNewProfile(count){
    document.getElementById('btn1').disabled = false
    document.getElementById('btn2').disabled = false
    let newCount = parseInt(count) + 1
 
        let dog = new Dog(dogs[newCount])
        document.getElementById('profile').innerHTML = dog.getDogHtml() 
        document.getElementById('voteButtons').innerHTML = dog.getDogBtnHtml(newCount) 
       
}


function endDogs(){
    
    document.querySelector('main').innerHTML = `
    <div id="your-candidates"><p id="result">You have now gone through all our candidates 
    in our database. Here is those you Liked:</div>
    <div id="hot-dogs">`
    
    document.getElementById('your-candidates').style.display = 'block'
    const hotDog = dogs.map(function(result){
        if(result.hasBeenLiked){
            return `<div>${result.name}, ${result.age}
            <p><img src="${result.avatar}" id="thumbnail"></p>
            </div>`
        }
    }).join('')
    document.getElementById('hot-dogs').innerHTML += `${hotDog}`
}


function render() {
    document.getElementById('profile').innerHTML = dog.getDogHtml() 
    document.getElementById('voteButtons').innerHTML = dog.getDogBtnHtml() 
}

const dog = new Dog(dogs[0])

render()
