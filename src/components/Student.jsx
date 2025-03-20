function Student({ name, index, action }) {

    return (
        <div className="card">
            <h3>Student {name}</h3>
            <p>no Seat: {index}</p>
            {action(name)}
        </div>
    )
}

export default Student