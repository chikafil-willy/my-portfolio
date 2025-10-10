import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Save to Supabase
    const { error } = await supabase.from("contacts").insert([form]);
    if (error) {
      alert("Error submitting form");
      return;
    }

    // 2. Notify via Formspree
    try {
      await fetch("https://formspree.io/f/xovlevwd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Formspree notification failed:", err.message);
      alert("Message saved, but notification failed.");
    }
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
