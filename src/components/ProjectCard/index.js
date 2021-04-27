export default function ProjectCard(props) {
    console.log(props)
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.img} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.writeUp}</p>
                        <a href={props.deployed} target="__blank" className="card-text">Link to Deployed Application</a>
                        <br/>
                        <a href={props.github} target="__blank" className="card-text">Link to Github Repo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}