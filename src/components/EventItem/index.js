import './index.css'

const EventItem = props => {
  const {eachitem, onChangeEventTriggered, isTrue} = props
  const {id, imageUrl, name, registrationStatus, location} = eachitem
  const styles = isTrue ? 'event-image1' : 'event-image'
  const changeStatus = () => {
    onChangeEventTriggered(id, registrationStatus)
  }

  return (
    <li className="list-item">
      <button type="button" className="button-style" onClick={changeStatus}>
        <img src={imageUrl} alt="event" className={styles} />
      </button>
      <p className="event-heading">{name}</p>
      <p className="event-paragraph">{location}</p>
    </li>
  )
}
export default EventItem
