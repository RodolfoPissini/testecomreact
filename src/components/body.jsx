import React from 'react'
import Lata from '../image/pepsi001.png'

function Body(){
    return(
        <div class="container">
            <div class='contentbx'>
                <h1>Isso é o que <span>eu gosto</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, maiores aspernatur beatae quis laudantium fugit ab sapiente ratione quod, corrupti voluptatem eaque at accusantium excepturi, similique nemo numquam a dolores.</p>
                <a href="#">Veja mais Produtos</a>
            </div>
            <div class='imgbx'>
                <img src={Lata} class="pepsi"/>
            </div>

        </div>
    )

}

export default Body