// About.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const About = () => {
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      const { data, error } = await supabase
        .from("about")
        .select("content")
        .single(); // fetches just one row

      if (error) {
        console.error("Error fetching about:", error);
      } else {
        setAboutText(data.content);
      }
    };

    fetchAbout();
  }, []);

  return (
    <div>
      <h1>About Me</h1>
      <p>{aboutText || "Loading..."}</p>
    </div>
  );
};

export default About;

