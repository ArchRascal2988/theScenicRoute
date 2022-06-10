import { useState } from "react"
import "./createRoute.css"
import { ADD_ROUTE } from "../../utils/mutations"
function RouteForm(props) {

    const [difficulty, setDiff] = useState("");
    //these will be added in the database
    const difficultyLevel = ["easy", "moderate", "hard", "madman"]
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [notes, setNotes] = useState("");
    const [points, setPoints] =useState("");


  //this is the function where we will map through the geometry and populate the points dropdown
    // const pointsDropDown = ({ points }) => {
    // let pointNum = 1
    // const pointsList = routes.geometry.map((points) => {
    //   return <p onClick={() => setPoints(points)}></p>
    // });

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            title: title,
            difficulty: difficulty,
            description: description,
            tags: tags,
            notes: notes
        });

        setTitle('');
        setDiff('');
        setDescription('');
        setTags('');
    }


    return (
        <div>
            <input
                type="text"
                placeholder="Title of Route"
                value={title}
                name="text"
                className="route-title"
                onChange={(event) => setTitle(event.target.value)}
            ></input>
            
            <form className="route-form" onSubmit={handleSubmit}>
                <div className="dropdown">
                    <button className={`dropbtn ${difficulty}`}></button>
                    <div className="dropdown-content">
                        <p onClick={() => setDiff(difficultyLevel[0])}>Easy</p>
                        <p onClick={() => setDiff(difficultyLevel[1])}>Moderate</p>
                        <p onClick={() => setDiff(difficultyLevel[2])}>Hard</p>
                        <p onClick={() => setDiff(difficultyLevel[3])}>Madman</p>
                    </div>
                </div>
                <input
                    type="text"
                    placeholder="Insert Description of Route"
                    value={description}
                    name="text"
                    className="route-description"
                    onChange={(event) => setDescription(event.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="insert tags separated by a ,"
                    value={tags}
                    name="text"
                    className="route-tags"
                    onChange={(event) => setTags(event.target.value)}
                ></input>
                {/* Set this notes part of the form to an event listener: double click to display this part of the form */}
                    {/* <div className="dropdown">
                    <button className={`dropbtn ${points}`}></button>
                    <div className="dropdown-content">
                        <p onClick={() => setDiff(difficultyLevel[0])}>Easy</p>
                        <p onClick={() => setDiff(difficultyLevel[1])}>Moderate</p>
                        <p onClick={() => setDiff(difficultyLevel[2])}>Hard</p>
                        <p onClick={() => setDiff(difficultyLevel[3])}>Madman</p>
                    </div>
                    </div> */}
                <button className="bucket-button">Create Route</button>
            </form>
        </div>
    );
}

export default RouteForm;