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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/95 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-black border border-gray-900 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-gray-600 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        <div className="p-12 md:p-16 lg:p-20">
          {isSuccess ? (
            <div className="text-center py-16">
              <CheckCircle className="w-12 h-12 text-white mx-auto mb-8" strokeWidth={1.5} />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                REQUEST<br />RECEIVED
              </h3>
              <p className="text-gray-600 text-sm font-light">
                We will contact you within 24 hours to schedule your consultation.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  SCHEDULE<br />CONSULTATION
                </h2>
                <p className="text-xs text-gray-600 tracking-[0.3em] uppercase font-light">
                  Begin in 60 seconds
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-medium text-gray-500 mb-3 uppercase tracking-[0.3em]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-800 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors font-light"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-medium text-gray-500 mb-3 uppercase tracking-[0.3em]">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-800 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors font-light"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="company" className="block text-[10px] font-medium text-gray-500 mb-3 uppercase tracking-[0.3em]">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-800 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors font-light"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-medium text-gray-500 mb-3 uppercase tracking-[0.3em]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-b border-gray-800 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors font-light"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-medium text-gray-500 mb-3 uppercase tracking-[0.3em]">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-b border-gray-800 text-white placeholder-gray-700 focus:outline-none focus:border-white transition-colors resize-none font-light"
                    placeholder="Tell us about your automation goals..."
                  />
                </div>

                {error && (
                  <div className="p-4 border border-red-900 text-red-500 text-sm font-light">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full border border-white text-white px-8 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium mt-12"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
                </button>

                <p className="text-center text-gray-700 text-[10px] font-light mt-6">
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
