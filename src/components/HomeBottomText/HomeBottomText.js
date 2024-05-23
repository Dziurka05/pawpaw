import './HomeBottomText.css';

function HomeBottomText({
    dogimg,
    dogheader,
    dogdescription,
    dogname
}) {
    return (
        <div className="DogBox">
            <div className="DogImg">
                <img src={dogimg} alt="DogImage" />
            </div>
            <div className="DogDesc">
                <div className='DogHeader'>{dogheader}</div>
                <div className='DogDescription'>{dogdescription}</div>
                <div className='DogName'>{dogname}</div>
            </div>
        </div>
    )
}

export default HomeBottomText;