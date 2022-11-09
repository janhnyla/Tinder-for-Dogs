import dogs from './data.js'

class Dog {
    constructor(data){
        Object.assign(this, data)
      
    }

    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        document.getElementById('profile').style.backgroundImage = `url(${avatar}`
        return `
        <div id="liked">like</div>
        <div id="nope">nope</div>
        <div class="name">${name}, ${age}</div>
        <div class="bio">${bio}</div>
        `
    }

    getDogBtnHtml(count) {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
        let x = ''
        count ? x = count : x = 0
        let i = 0 + x
        
        return `
        <div><button class="cross" id="btn1" data-nope="${i}"><img src="images/icon-cross.png"></button></div>
        <div><button class="heart" id="btn2" data-like="${i}"><img src="images/icon-heart.png"></button></div>`
       
        }



}

export default Dog

