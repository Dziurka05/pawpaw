import './banner.css'
import dog245 from '../../images/elipse1.jpg'
import dog989 from '../../images/elipse2.png'
import dog98 from '../../images/elipse3.jpg'
import dog67 from '../../images/tlo.jpg'
import PuppyComment from '../puppy-comment/Puppycomment'
import lifegoodpuppy from '../../images/elipse1.jpg'

function Banner() {
    return (
        <div className='big-wrapper'>
        <div className='banner-wrapper'>
            <div className='banner-section-column'>
                <PuppyComment
                    title={"lives good"}
                    paragraph={"Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"}
                    name={"Jack"}
                    image={lifegoodpuppy}
                    isReverserow={false}
                />
                <PuppyComment
                    title={"lives good"}
                    paragraph={"Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"}
                    name={"Jack"}
                    image={lifegoodpuppy}
                    isReverserow={true}
                />
            </div>

            <div className='banner-section-title'>
                <h1>Fluffs That Found a Home Through PawPaw</h1>
            </div>

            <div className='banner-section-whatever'>
                <PuppyComment
                    title={"lives good"}
                    paragraph={"Lots of food, lots of walkses and lots of food. After i finish paw school I might get good job to repay my hoomans. Then I give them treats... Until then i just cute"}
                    name={"Jack"}
                    image={lifegoodpuppy}
                    isreversecolumn={true}
                />
                <span className='happy-customer'>over 300 happy customers and their dupa</span>
            </div>

        </div>
        </div>
    )
}
export default Banner 