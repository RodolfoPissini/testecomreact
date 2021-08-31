import react from 'react'
import Lata1 from '../image/pepsi001.png'
import Lata2 from '../image/pepsi002.png'
import Lata3 from '../image/pepsi003.png'


function thumb(){      

    return(
        <div class="thumblatas">
            <img src={Lata1} class="latas lt1"/>
            <img src={Lata2} class="latas lt2"/>
            <img src={Lata3} class="latas lt3"/>
        </div>
    )
}

export default thumb