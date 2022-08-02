import React from "react"

function Header(){
    return(
        <>
        
            <div id='container' className="w-100">
                <div className="d-flex justify-content-around align-items-center">
                    <a href="logo"><img className=''src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.1/mercadolibre/logo__large_plus.png" alt=""/></a>
                    <div class="input-group mb-3 mt-3">
                         <input type="text" id='inputHeader' placeholder="Buscar productos, marcas y mas..." />
                         <span class="input-group-text" id="basic-addon2"><img id='lupa'src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="" /></span>
                    </div>

                    <div>
                        <img src="https://cdn-icons.flaticon.com/png/512/2652/premium/2652191.png?token=exp=1659472389~hmac=71a08019fb9e91d4c5608b3ffa00a6bd" alt="" id='regalo'/>
                        <span> Encontrá los mejores regalos acá!</span>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Header