import React, { useState } from "react";
import Modal from "../components/Modal";
import "../styles.css";

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <button onClick={() => setModalOpen(true)}>This is My Profile!</button>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h3>Profile</h3>
        <hr></hr>
        <p>Name : Maulana Rafael Irianto</p>
        <p>Phone : +6289685395860</p>
        <p>Email : maulanarafael36@gmail.com</p>
      </Modal>
    </div>
  );
}

export default Home;
