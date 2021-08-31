import React from 'react'
import Logo from '../image/logo.png'
function Header(){
    return( 
        <div class="header">
           <img src={Logo}/>
           <ul>
               <li>Home</li>
               <li>Produtos</li>
               <li>Novidades</li>
               <li>Newsletter</li>
               <li>Contato</li>
           </ul>
        </div>
    )
} 
    

export default Header