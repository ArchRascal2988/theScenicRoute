import { useState } from "react";

function RouteForm(props) {

    const [difficulty, setDiff] = useState("");
    //these will be added in the database
    const difficultyLevel = ["easy", "moderate", "hard", "madman"]
    //length will be generated from the route? How not sure...
    const [length, setLength] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
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
            id: Math.random(Math.floor() * 1000),
            title: title,
            difficulty: difficulty,
            description: description,
            length: length,
            rating: rating,
            tags: tags,
            notes: notes
        });

        setTitle('');
        setDiff('');
        setLength('');
        setDescription('');
        setRating('');
        setTags('');
        setNotes('');
    }


    // this takes the user typed inputs and sets Description & Rating
    // Difficulty and Tags will be chosen in the "return" below   
    const handleChange = (e) => {
        setDescription(e.target.value);
        setRating(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title of Route"
                value={title}
                name="text"
                className="route-rating"
                onChange={handleChange}
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
                {/* Length will be possibly dynamic when route is being created */}
                <input
                    type="text"
                    placeholder="Length of Route"
                    value={length}
                    name="text"
                    className="route-length"
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="Insert Description of Route"
                    value={description}
                    name="text"
                    className="route-description"
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="Rate Route out of 10"
                    value={rating}
                    name="text"
                    className="route-rating"
                    onChange={handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="insert tags separated by a ,"
                    value={tags}
                    name="text"
                    className="route-tags"
                    onChange={handleChange}
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