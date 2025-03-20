export const Teacher = ({ name, action }) => {

    return (
        <div className="card">
            <h2>Teacher {name}</h2>
            {action(name)}
        </div>
    )
}