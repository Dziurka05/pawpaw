import './HomeBottom.css';
import HomeBottomText from '../HomeBottomText/HomeBottomText.js';
import HomeBottomText2 from '../HomeBottomText2/HomeBottomText2.js';
import HomeBottomText3 from '../HomeBottomText3/HomeBottomText3.js';
import dog1 from '../../images/ahsoka.png';
import dog2 from '../../images/livin.png';
import dog3 from '../../images/lawyer.png';

function HomeBottom() {
    return (
        <div className="HomeBottom">
            <div className='Lewo'>
                <HomeBottomText2
                    dogimg={dog2}
                    dogheader="Life good"
                    dogdescription="Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"
                    dogname="Jack"
                />
                <HomeBottomText
                    dogimg={dog1}
                    dogheader="My humans gave me a wonderful place to guard"
                    dogdescription="It was important to me to choose the hoomans who liked to take lots of walksies and give good belly rubs. I succeeded!!!"
                    dogname="Ahsoka"
                />
            </div>
            <div className='Srodek'>
                Fluffs That Found a Home
                Through PawPaw
            </div>
            <div className='Prawo'>
                <HomeBottomText3
                    dogimg={dog3}
                    dogheader="All I know about paws is you need to have them"
                    dogdescription="I didn’t always work as an attorney. I started as nothing more than a pupper looking for work... Now I run the business with my hoomans."
                    dogname="Fido B."
                />
                <p id='ponadczysta'>Over 300 happy customers...and their hoomans</p>
            </div>
        </div>
    )
}

export default HomeBottom;