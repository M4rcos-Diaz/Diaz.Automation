import { useState } from 'react';
import { X, Calendar, CheckCircle, Send } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900/95 to-gray-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-500/20 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-full transition-all duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="inline-flex p-5 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full mb-6 animate-pulse">
                <CheckCircle className="w-20 h-20 text-green-400" />
              </div>
              <h3 className="text-4xl font-black text-white mb-4 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                Booking Received!
              </h3>
              <p className="text-gray-400 text-lg">
                Our team will contact you within 24 hours to schedule your free consultation.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl shadow-lg glow-cyan">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                    Book Your Free Call
                  </h2>
                  <p className="text-cyan-400 text-sm font-semibold">Get Started in 60 Seconds</p>
                </div>
              </div>

              <p className="text-gray-400 mb-8 leading-relaxed text-[15px]">
                Discover how AI automation can transform your business operations. Our experts will create a custom strategy tailored to your specific needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all resize-none"
                    placeholder="Tell us about your automation goals, challenges, and what you're looking to achieve..."
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/40 rounded-xl text-red-400 text-sm font-semibold">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white text-lg hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <p className="text-center text-gray-500 text-xs mt-4">
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
