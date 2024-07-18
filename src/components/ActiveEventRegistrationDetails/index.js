import './index.css'

const isStatusConstant = {
  registered: 'REGISTERED',
  notregistered: 'YET_TO_REGISTER',
  registerend: 'REGISTRATIONS_CLOSED',
  notfound: 'INITIAL',
}

const ActiveEventRegistrationDetails = props => {
  const {isregisterd} = props
  console.log(isregisterd)
  const notregistered = () => (
    <div className="yettoregister-contianer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yettoregisterparagraph">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form{' '}
      </p>
      <button type="button" className="yettoregisterbutton">
        Register Here
      </button>
    </div>
  )

  const registered = () => (
    <div className="yettoregister-contianer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="yet-to-register-image"
      />
      <h1 className="activeevent-yet-to-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationend = () => (
    <div className="yettoregister-contianer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yet-to-register-image"
      />
      <h1 className="activeevent-yet-to-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="yettoregisterparagraph">
        Stay tuned. We will reopen the registrations soon..
      </p>
    </div>
  )
  const registrationinitial = () => (
    <div className="yettoregister-contianer1">
      <p className="yettoregisterparagraph">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  switch (isregisterd) {
    case isStatusConstant.registered:
      return registered()
    case isStatusConstant.notregistered:
      return notregistered()
    case isStatusConstant.registerend:
      return registrationend()
    default:
      return registrationinitial()
  }
}
export default ActiveEventRegistrationDetails
