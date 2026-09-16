import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Currently from './components/Currently';
import Projects from './components/Projects';
import AIWorkflow from './components/AIWorkflow';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal';
import { trackVisit } from './utils/tracker';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null,
    data: null,
    title: '',
    subtitle: ''
  });

  // Fire analytics ping once on load
  useEffect(() => { trackVisit(); }, []);

  const handleOpenModal = (type, data, title = '', subtitle = '') => {
    setModalState({ isOpen: true, type, data, title, subtitle });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#05080f] text-slate-100 selection:bg-blue-600/25 selection:text-blue-200">
      <Navbar />
      <main>
        <Hero />
        <Currently />
        <Projects onOpenModal={handleOpenModal} />
        <AIWorkflow />
        <Experience onOpenModal={handleOpenModal} />
        <Skills />
        <Credentials onOpenModal={handleOpenModal} />
        <Contact />
      </main>
      <Footer />

      <Modal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        data={modalState.data}
        title={modalState.title}
        subtitle={modalState.subtitle}
      />
    </div>
  );
}