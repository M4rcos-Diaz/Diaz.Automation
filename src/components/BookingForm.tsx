import { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function BookingForm({ isOpen, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: submitError } = await supabase
        .from('bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            message: formData.message
          }
        ]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-black border border-gray-800 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-12 md:p-16">
          {isSuccess ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-white mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                REQUEST RECEIVED
              </h3>
              <p className="text-gray-500">
                We will contact you within 24 hours to schedule your consultation.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                SCHEDULE CONSULTATION
              </h2>
              <p className="text-sm text-gray-500 mb-12 tracking-widest uppercase">
                Begin in 60 seconds
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-black border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none"
                    placeholder="Tell us about your automation goals..."
                  />
                </div>

                {error && (
                  <div className="p-4 border border-red-500 text-red-500 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border-2 border-white text-white px-6 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
                </button>

                <p className="text-center text-gray-600 text-xs">
                  By submitting, you agree to receive communications from Diaz Automation
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
