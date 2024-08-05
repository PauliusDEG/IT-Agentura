import React from 'react'
import './Portfelis.css'
import './Spaceman'

const Portfelis = () => {
  return (
    <div>
       <div id="logoBlue"></div>
       <div className="header-two">
       <h1>Mūsų Portfelis</h1>
       </div>
       <div className="gallery">
       <div className="naujausi-darbai">
                    <div className="pictures">
                    <div className="pic-box">
                         <img src="..//src/assets/FotoVienas.svg" alt="" /> 
                         <h4>Tinklalapių vartotojo sąsajos dizainas</h4>
                         <p>Kūrybinis vartotojo sąsajos dizainas</p>  
                    </div> 
                    <div className="pic-box">
                        <a href="/Spaceman"><img src="..//src/assets/FotoTrys.svg" alt="" /></a>
                        <h4>Kurti skaitmeninę strategiją</h4>
                        <p>Socialinių tinklų Marketingas</p>
                    </div>
                    <div className="pic-box">    
                        <img src="..//src/assets/FotoDu.svg" alt="" />
                        <h4>Vartotojo sąsajos dizainas</h4>
                        <p>Kūrybinis logotipo atnaujinimas</p>
                    </div>
                    <div className="pic-box">
                        <img src="..//src/assets/FotoKeturi.svg" alt="" />
                        <h4>Reklaminių banerių kūrimas</h4>
                        <p>Grafinis dizainas</p>
                    </div>
                    <div className="pic-box">
                        <img src="..//src/assets/SestaFt.svg" alt="" />
                        <h4>Grafinis dizainas</h4>
                        <p>Grafinis dizainas</p>
                    </div>
                    <div className="pic-box">
                        <img src="..//src/assets/SeptintaFt.svg" alt="" />
                        <h4>Vartotojo sąsajos dizainas</h4>
                        <p>Kūrybinis logotipo atnaujinimas</p>
                    </div>
                    </div>
                </div>
       </div>
       <div className="subHeaderFive">
      <img src="..//src/assets/cta.svg" alt="" />
    </div>
    </div>
  )
}

export default Portfelis
