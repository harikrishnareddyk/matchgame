import './index.css'

const Images = props => {
  const {item, matchimage} = props
  const {id, imageUrl, thumbnailUrl, category} = item

  const selectedImage = () => {
    matchimage(id)
  }

  return (
    <li>
      <button onClick={selectedImage}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Images
