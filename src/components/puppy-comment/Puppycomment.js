import './Puppycomment.css'



function PuppyComment({
    title,  
    paragraph,
    name,
    image,
    isReverserow,
    isreversecolumn,
}){
    
    var direction;

    if(isReverserow !==undefined){
        direction = isReverserow ? 'row-reverse' : 'row';
        console.log(direction)
    }
    if(isreversecolumn !==undefined){
        direction = isreversecolumn ? 'column-reverse' : 'column';
    }
    return(
        <div className='puppy-comment-wrapper' style={{flexDirection: direction }}>
    <div className='puppy-comment-text-wrapper'>
    <span className='puppy-comment-title'>{title}</span>
    <span className='puppy-comment-paragraph'>
{paragraph}
    </span>
    <span className='puppy-comment-name'>{name}</span>
    </div>
    <img className='puppy-comment-images' src={image}/>
    </div>
        


)
}
export default PuppyComment