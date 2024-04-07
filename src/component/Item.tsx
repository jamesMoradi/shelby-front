
interface Data { 
  _id : string
  name : String
  price : String
  description : string
  image : string
  category : string
}

const Item = ({data} : {data : Data}) => {
  return (
    <div className="my-4 bg-[#391d0c] custom-rounded text-white border border-black side-neon-shadow">
        <div className="img bg-custom-rounded p-4">
            <img 
            className='bg-custom-rounded w-full h-40 overflow-hidden object-cover' 
            src={`${process.env.REACT_APP_BASE_URL}/${data.image}`} 
            alt="" />
        </div>
        <div className="p-3 border-t-[1px] border-t-black text-right">
            <h1>{data.name}</h1>
            <h3>{data.description}</h3>
            <p>{data.price}</p>
        </div>
    </div>
  )
}

export default Item