import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const Home = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchHomeContent = async () => {
      const { data, error } = await supabase.from("home_content").select("*").limit(1).single();
      if (!error) setContent(data);
    };
    fetchHomeContent();
  }, []);

  if (!content) return <p>Loading...</p>;

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.intro}</p>
    </div>
  );
};

export default Home;
