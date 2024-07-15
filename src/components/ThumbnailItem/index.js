import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItems, updateActiveImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailItems

  const updateActiveImage = () => {
    updateActiveImageId(id)
  }

  const activeImageClassName = isActive ? 'active-image' : ''

  return (
    <li>
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${activeImageClassName}`}
          onClick={updateActiveImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
