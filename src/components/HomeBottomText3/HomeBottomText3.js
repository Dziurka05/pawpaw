import './HomeBottomText3.css';

function HomeBottomText({
    dogimg,
    dogheader,
    dogdescription,
    dogname
}) {
    return (
        <div className="DogBox3">
            <div className="DogImg3">
                <img src={dogimg} alt="DogImage3" />
            </div>
            <div className="DogDesc2">
                <div className='DogHeader3'>{dogheader}</div>
                <div className='DogDescription3'>{dogdescription}</div>
                <div className='DogName3'>{dogname}</div>
            </div>
        </div>
    )
}

export default HomeBottomText;