import "./Card.css"


const Card = ({image,title}:{image:string,title:string}) => {
  return (
    <div className='card'>
        <img src={image} alt={title}/>
        <h3>{title}</h3>
    </div>
  )
}

export default Card