import React, { useEffect, useState } from "react";
import axios from "axios";

function Contact() {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    const baseURL = "http://localhost:3000/contact";

    axios
      .get(`${baseURL}/getAddress`)
      .then((res) => setAddress(res.data))
      .catch((err) => console.error("Error fetching address:", err));

    axios
      .get(`${baseURL}/getEmail`)
      .then((res) => setEmail(res.data))
      .catch((err) => console.error("Error fetching Email:", err));

    axios
      .get(`${baseURL}/getPhoneNo`)
      .then((res) => setPhoneNo(res.data))
      .catch((err) => console.error("Error fetching PhoneNo:", err));
  }, []);

  return (
    <div className="pb-20 border-b border-neutral-900">
      <h1 className="my-10 text-4xl text-center">Get in Touch</h1>
      <div className="tracking-tighter text-center">
        <p className="my-4">{address}</p>
        <p className="my-4">{phoneNo}</p>
        <a href="#" className="border-b">
          {email}
        </a>
      </div>
    </div>
  );
}

export default Contact;
