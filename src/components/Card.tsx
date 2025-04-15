import "./Card.css"


const Card = ({image,title,onClick}:{image:string,title:string,onClick:()=>void}) => {
  return (
    <div className='card'>
        <img src={image} alt={title} onClick={onClick}/>
        <h3>{title}</h3>
    </div>
  )
}

export default Card