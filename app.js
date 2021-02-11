let jsonResponse = {
    status: 200,
    data: [
        {
            id: '00001',
            img: 'https://dummyimage.com/320x50/000/fff&text=Image1',
        },
        {
            id: '00002',
            img: 'https://dummyimage.com/320x50/000/fff&text=Image2',
        },
        {
            id: '00003',
            img: 'https://dummyimage.com/320x50/000/fff&text=Image3',
        },
        {
            id: '00004',
            img: 'https://dummyimage.com/320x50/000/fff&text=Image4',
        },
        {
            id: '00005',
            img: 'https://dummyimage.com/320x50/000/fff&text=Image5',
        },
    ],
}
let customTagsList = [
    { tagName: 'mytag' },
    { tagName: 'yourtag' },
    { tagName: 'histag' },
    { tagName: 'hertag' },
]

function bindIframes() {
    customTagsList.forEach((jElement) => {
        //process custom tag json array
        let old_element = document.getElementById(
            'customTag' + jElement.tagName
        ) //<div id="custommytag"></div>
        if (old_element != null) {
            //check for old elements with id
            let repl_element = document.createElement(jElement.tagName) //create new element as original state
            old_element.replaceWith(repl_element) //replace as original state <mytag></mytag>
        }
        let elements = document
            .getElementById('body')
            .getElementsByTagName(jElement.tagName) //get elements with <mytag></mytag>
        for (let index = 0; index < elements.length; index++) {
            //loop on all matching custom elements
            let element = elements[index] //take one custom element instance
            let item =
                jsonResponse.data[
                    Math.floor(Math.random() * jsonResponse.data.length)
                ] //get random image from image array
            let new_element = document.createElement('div') //create new div element
            new_element.id = 'customTag' + jElement.tagName //give id to div as custommytag => <div id="custommytag"></div>
            new_element.innerHTML =
                '<h2>' +
                jElement.tagName +
                "</h2><iframe id='custIframe' src='index.html?id=" +
                item.id +
                '&imgurl=' +
                item.img +
                "' width='500' height='100' frameborder='0'/>"
            //setting iframe in the new element with image url and id

            element.replaceWith(new_element) //replace custom element with new element
            console.log(item)
        }
    })
}

bindIframes()

setInterval(function () {
    bindIframes()
}, 15000) //refersh iframes in every 15 seconds
