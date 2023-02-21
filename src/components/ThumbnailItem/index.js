import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, onClickChange, isActive} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = thumbnailList

  const change = () => {
    onClickChange(imageUrl, imageAltText)
  }

  const applyClass = isActive ? 'opacity' : ''

  return (
    <li>
      <button type="button" className="button" onClick={change}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbNail ${applyClass}`}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
