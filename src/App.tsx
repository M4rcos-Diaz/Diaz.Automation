import { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import BookingForm from './components/BookingForm';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950">
      <Hero onBookCall={() => setShowForm(true)} />
      <Features onBookCall={() => setShowForm(true)} />
      <BookingForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </div>
  );
}

export default App;
