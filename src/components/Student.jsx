function Student({name, noSeat}) {
    return (
        <div className="card">
            <h3>Student {name}</h3>
            <p>no Seat: {noSeat}</p>
            <div>
                <button type='button'>Join ReactJS</button>
                &nbsp;
                <button type='button'>Join Tahfidz</button>
            </div>
        </div>
    )
}

export default Student