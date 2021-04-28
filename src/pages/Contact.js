export default function Home() {
    return (
        <div className="container-lg my-3">
            <h3>Contact Infomation</h3>
            <dl className="row">
                <dt className="col-sm-3">Phone Number:</dt>
                <dd className="col-sm-9">(337) 499-0872</dd>

                <dt className="col-sm-3">Email:</dt>
                <dd className="col-sm-9">
                    <a href="mailto: MatthewRonaldJohnson@gmail.com">
                        MatthewRonaldJohnson@gmail.com
                    </a>
                </dd>

                <dt className="col-sm-3">LinkedIn:</dt>
                <dd className="col-sm-9">
                    <a target="__blank" href="https://www.linkedin.com/in/matthewronaldjohnson/">
                        MatthewRonaldJohnson
                    </a>
                </dd>

                <dt className="col-sm-3">Github:</dt>
                <dd className="col-sm-9">
                    <a target="__blank" href="https://github.com/MatthewRonaldJohnson">
                        MatthewRonaldJohnson
                    </a>
                </dd>
            </dl>
        </div>
    )
}