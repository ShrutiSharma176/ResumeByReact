import React from "react";
import image from "../images/design-desk.jpeg";
const imageAltText = "purple and blue abstract background";

const edu = [
    "12th Grade from SICA School , with percentage 92.8%",
    "10th Grade from SICA School , with percentage 92.2%",
    "B.E from IET DAVV University , with aggregate CGPA 8.8(84%) till 5th SEM"
  ];

const Education = () => {
    return (
        <section className="light" id="education">
        <img className="background" src={image} alt={imageAltText} />
            <div
                style={{
                    backgroundColor: "white",
                    width: "50%",
                    padding: "4rem",
                    margin: "3rem auto",
                    textAlign: "center",
                }}
            >
                <h2>Education</h2>
                <hr/>
                <ul
                    style={{
                        textAlign: "left",
                        fontSize: "1.25rem",
                        margin: "2rem 3rem",
                        gap: "3rem",
                    }}
                >
                    {edu.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
                </ul>
            </div>
        </section>

    )
}

export default Education;