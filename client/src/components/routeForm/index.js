import { useState } from "react";

function RouteForm(props) {

    const [difficulty, setDiff] = useState("");
    //these will be added in the database
    const difficultyLevel = ["easy", "moderate", "hard", "madman"]
    //length will be generated from the route? How not sure...
    const [length, setLength] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [tags, setTags] = useState("");
    //these will added in the database
    const tagNames = ["paved", "forest", "dog-friendly"," kid-friendly", "wheelchair-friendly", "walking", "running", "views"]

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.random(Math.floor() * 1000),
            difficulty: difficulty,
            length: length,
            description: description,
            rating: rating,
            tags: tags,
        });

        setDiff('');
        setLength('');
        setDescription('');
        setRating('');
        setTags('');
    }


    // this takes the user typed inputs and sets Description & Rating
    // Difficulty and Tags will be chosen in the "return" below   
    const handleChange = (e) => {
        setDescription(e.target.value);
        setRating(e.target.value);
    };

    return (
        <div>
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
                {/*Rating will be changed into a star system or something similar */}
                <input
                    type="text"
                    placeholder="Rate Route"
                    value={rating}
                    name="text"
                    className="route-rating"
                    onChange={handleChange}
                ></input>
                {/* Tags will be a drop down or a list of tags will be appear and once the user clicks on a tag, a tag will be added. */}
                <div className="dropdown">
                    <button className={`dropbtn ${difficulty}`}></button>
                    <div className="dropdown-content">
                        <p onClick={() => setTags(tagNames[0])}>Insert Tag Name</p>
                        <p onClick={() => setTags(tagNames[1])}>Insert Tag Name</p>
                        <p onClick={() => setTags(tagNames[2])}>Insert Tag Name</p>
                        <p onClick={() => setTags(tagNames[3])}>Insert Tag Name</p>
                        {/* additional tags will be added... */}
                    </div>
                </div>
                <button className="bucket-button">Create Route</button>
            </form>
        </div>
    );
}

export default RouteForm;