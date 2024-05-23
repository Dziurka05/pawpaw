import './LookingFor.css';
import ListItem from '../List/List.js';
import doggyImage from "../../images/doggy1.png";
import doggyImage2 from "../../images/doggy2.png";
import doggyImage3 from "../../images/doggy3.png";
import doggyImage4 from "../../images/doggy4.png";

function LookingFor() {
    return (
        <div className="LookingFor">
            <p id='szukam'>Looking for a Pawfect home</p>
                <div className="DogCard">
                    <ListItem 
                        doggyImage={doggyImage} 
                        dogname="Coco" 
                        dogmodel="A3 SportBag 2.0 TDI" 
                        dogreg="First registration: 03/2024" 
                        dogdist="Distance walked: 2000 km" 
                        dogfuel="Fuel type: Treats" 
                    />
                    <ListItem 
                        doggyImage={doggyImage2} 
                        dogname="Lucy" 
                        dogmodel="Clio 1.2 16V" 
                        dogreg="First registration: 01/2024" 
                        dogdist="Distance walked: 4000 km" 
                        dogfuel="Fuel type: Treats" 
                    />
                    <ListItem 
                        doggyImage={doggyImage3} 
                        dogname="Rocky" 
                        dogmodel="Benz C 200 T  ..." 
                        dogreg="First registration: 04/2024" 
                        dogdist="Distance walked: 1000 km" 
                        dogfuel="Fuel type: Sticks" 
                    />
                    <ListItem 
                        doggyImage={doggyImage4} 
                        dogname="Johny" 
                        dogmodel="330 d Coupe ..." 
                        dogreg="First registration: 03/2024" 
                        dogdist="Distance walked: 2300 km" 
                        dogfuel="Fuel type: Moonlight" 
                    />
                </div>
        </div>
    )
}

export default LookingFor;