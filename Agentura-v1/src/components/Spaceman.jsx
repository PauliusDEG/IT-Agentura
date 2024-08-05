import React from 'react'
import './Spaceman.css'

const Spaceman = () => {
  return (
    <div>
        <header>
          <div className="mainPic">
            <img src="..//src/assets/Spaceman.svg" alt="Spaceman" />
          </div>
          <div className="fourBoxes">
            <div className="boxis">
              <h3>Kategorija :</h3>
              <h4>Debesų sprendimas</h4>
            </div>
            <div className="boxis">
              <h3>Klientas :</h3>
              <h4>BrightMedia Solutions  </h4>
            </div>
            <div className="boxis">
              <h3>Data :</h3>
              <h4>Rugpjūčio 23, 2023</h4>
            </div>
            <div className="boxis">
              <h3>Vieta :</h3>
              <h4>489 Depot Road, Midland  </h4>
            </div>
          </div>
        </header>
        <div className="subHeaderSix">
          <div className="para">
            <h4> 01. Problema</h4>
            <p>Kai mūsų pasirinkimo galia yra nevaržoma ir niekas negali mums trukdyti daryti to, kas mums labiausiai patinka, kiekvienas malonumas turėtų būti pasveikintas, o kiekvienas skausmas vengiamas. Bet tam tikromis aplinkybėmis ir dėl pareigų arba verslo įsipareigojimų dažnai gali atsitikti, kad malonumai turi būti atstumti, o nepatogumai priimami. Todėl išmintingas žmogus visada laikosi šio pasirinkimo principo: jis atsisako malonumų, siekdamas kitų didesnių malonumų, arba jis pakelia skausmus, kad išvengtų dar blogesnių skausmų.</p>
          </div>
          <div className="para">
            <h4>02. Sprendimas</h4>
            <p>Kartais, dėl tam tikrų aplinkybių ir pareigų, nutiks, kad malonumai turi būti atmesti, o nepatogumai priimami. Todėl išmintingas žmogus yra priverstas pasirinkti, kad jis arba pasiekia didesnius malonumus atmetęs mažesnius arba iškelia skausmus, kad išvengtų blogesnių.</p>
            <p>Vienas, kuris vengia skausmo, kuris nesuteikia jokio rezultatinio malonumo.<br/>
            varginantis fizinis pratimas.<br/>
            Vienas, kuris vengia skausmo, kuris nesuteikia jokio rezultato.<br/>
            kuris iš mūsų kada nors imasi varginamo.<br/>
            Atsisako paties malonumo, nes tai yra.<br/>
            </p>
          </div>
          <div className="para">
            <h4>03. Rezultatai</h4>
            <p>Nes tai skausmas, bet dėl to, kad kartais atsiranda aplinkybių, kuriuose vargas ir skausmas gali jam suteikti didelį malonumą. Paimkime trivialų pavyzdį: kuris iš mūsų imasi varginančių fizinio pratimo, išskyrus norą gauti iš to kokios nors naudos? Bet kas turi teisę priekaištauti žmogui, kuris pasirenka mėgautis malonumu, neturinčiu nemalonios pasekmės, arba tam, kuris vengia skausmo, kuris nesuteikia jokio rezultatinio malonumo?</p>
            <p>Kai mūsų pasirinkimo galia yra nevaržoma ir kai niekas mums negali trukdyti daryti to, kas mums labiausiai patinka, kiekvienas malonumas yra pasveikintinas, o kiekvienas skausmas vengiamas. Bet tam tikromis aplinkybėmis ir dėl pareigų arba verslo įsipareigojimų dažnai gali atsitikti, kad malonumai turi būti atstumti, o nepatogumai priimami. Todėl išmintingas žmogus visada laikosi šio pasirinkimo principo: jis atsisako malonumų, siekdamas kitų didesnių malonumų, arba jis pakelia skausmus, kad išvengtų dar blogesnių skausmų.    </p>
          </div>
          <div className="pikai">
            <div className="pikaiB">
            <img src="..//src/assets/Pikas1.svg" alt="Pic1" />
            </div>
            <div className="pikaiB">
            <img src="..//src/assets/Pikas2.svg" alt="Pic2" />
            </div>
            <div className="pikaiB">
            <img src="..//src/assets/Pikas3.svg" alt="Pic3" />
            </div>
          </div>
         
        </div>
        <div className="naujausiPro">
            <h2>Naujausi Projektai</h2>
            <div className="pictures-two">
                    <div className="pic-box-two">
                         <img id="pavas" src="..//src/assets/FotoVienas.svg" alt="" /> 
                         <h4>Tinklalapių vartotojo sąsajos dizainas</h4>
                         <p>Kūrybinis vartotojo sąsajos dizainas</p>  
                    </div> 
                    <div className="pic-box-two">
                        <a href="/Portfelis"><img id="pavas" src="..//src/assets/FotoTrys.svg" alt="" /></a>
                        <h4>Kurti skaitmeninę strategiją</h4>
                        <p>Socialinių tinklų Marketingas</p>
                    </div>
                    <div className="pic-box-two">    
                        <img id="pavas" src="..//src/assets/FotoDu.svg" alt="" />
                        <h4>Vartotojo sąsajos dizainas</h4>
                        <p>Kūrybinis logotipo atnaujinimas</p>
                    </div>
                    </div>
          </div>
    </div>
  )
}

export default Spaceman 
