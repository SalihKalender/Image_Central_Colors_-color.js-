import { prominent } from 'color.js'

const imgInp = document.getElementById('imgInp')

const blah = document.getElementById('blah')

imgInp.onchange = async evt => {

    document.querySelector('.color-infos').innerHTML = ''

    const [file] = imgInp.files

    if (file) {

        blah.src = URL.createObjectURL(file)
        
        const colors = await prominent(blah.src, { amount: 5 })

        const gradient = []
        
        colors.forEach((color) => {
            
            let adding_color = `rgb(${color[0]},${color[1]},${color[2]})`
            
            let new_element = document.createElement('div')
            
            new_element.classList.add('color')
            
            let bg_color = adding_color
            
            new_element.style.backgroundColor = bg_color
            
            document.querySelector('.color-infos').appendChild(new_element)
            
            gradient.push(adding_color)
            
        })
        
        document.body.style.backgroundImage = `linear-gradient(to right, ${gradient[0]},${gradient[1]},${gradient[2]},${gradient[3]},${gradient[4]})`
        
    }
}