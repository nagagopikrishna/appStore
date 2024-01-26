import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="app-item-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name"> {appName}</p>
    </li>
  )
}

export default AppItem
