import CoButton from "./CoButton"

function Online(prop) {
    return (
        <div className="left-s">
            <p>{prop.one}</p>
            <p>{prop.two}</p>
            <p>{prop.three}</p>
            <CoButton content="Explore our courses" />
        </div>
    )
}

export default Online