import React, { useEffect, useState } from "react";

function About() {

    document.body.style = "height: 100vh";

    const [loremIpsum, setLoremIpsum] = useState("");
    const paragraphs = 10

    useEffect(() => {
        if(loremIpsum.length> 0 )   document.body.style = "height: 100%";
        if(loremIpsum.length> 0 )   document.body.style = "border: 1px solid #ddd;";
    }, [loremIpsum])

    useEffect(() => {
        fetch(`https://api.api-ninjas.com/v1/loremipsum?paragraphs=${paragraphs}`, {
            headers: { "X-Api-Key": "UslKzM54+Ikec9ds7KhjJA==6dIqOQzi27zf9baz" },
        })
        .then((res) => res.json())
        .then((data) =>  setLoremIpsum(data.text))
    }, [paragraphs]);

    return (
        <>
            <h1>About</h1>
            <div className="abouts">
                {loremIpsum.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </>
    );
}

export default About;



