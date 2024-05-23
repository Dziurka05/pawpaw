import './HomeBottomText2.css';

function HomeBottomText({
    dogimg,
    dogheader,
    dogdescription,
    dogname
}) {
    return (
        <div className="DogBox2">
            <div className="DogImg2">
                <img src={dogimg} alt="DogImage2" />
            </div>
            <div className="DogDesc2">
                <div className='DogHeader2'>{dogheader}</div>
                <div className='DogDescription2'>{dogdescription}</div>
                <div className='DogName2'>{dogname}</div>
            </div>
        </div>
    )
}

export default HomeBottomText;