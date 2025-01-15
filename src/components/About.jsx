import React from "react";

function About() {
  return (
    <div>
      <h1>About Stage Fright</h1>
      <p>
        Stage Fright is an up-and-coming rock band blending classic rock vibes with a modern twist. Known for their electrifying performances and heartfelt lyrics, they are quickly gaining a loyal fanbase across the globe.
      </p>
      
      <h2>Band Members</h2>
      <ul style={{ listStyle: "none", padding: 0, textAlign: "left", margin: "0 auto", maxWidth: "600px" }}>
        <li>
          <strong>Alex (Vocals):</strong> The powerhouse voice of Stage Fright, Alex captivates audiences with a dynamic range and raw emotion in every performance.
        </li>
        <li>
          <strong>Taylor (Guitar):</strong> Taylor’s electrifying riffs and soulful solos provide the signature sound of Stage Fright.
        </li>
        <li>
          <strong>Jordan (Drums):</strong> Jordan’s energy and precision set the rhythm that keeps the band and audience moving.
        </li>
        <li>
          <strong>Casey (Bass):</strong> With grooves that anchor every song, Casey’s talent is the heartbeat of the band.
        </li>
      </ul>

      <h2>Our Music</h2>
      <p>
        Stage Fright’s music is a mix of high-energy rock anthems and soulful ballads. Their debut album, <em>"Breaking the Silence,"</em> features tracks that highlight their diverse influences, from classic rock legends to modern alternative sounds.
      </p>

      <h2>How We Got Started</h2>
      <p>
        Stage Fright began in 2020 when four friends came together with a shared passion for music. After performing at local venues and small festivals, their undeniable chemistry and dedication caught the attention of fans and industry professionals alike. Today, they are on a mission to bring their unique sound to stages worldwide.
      </p>
    </div>
  );
}

export default About;
