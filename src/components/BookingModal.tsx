import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import {
  createBooking,
  formatTimeLabel,
  generateTimeSlots,
  getDateKey,
  isDateDisabled,
  isSlotBooked,
  type Booking,
} from '../utils/bookingUtils';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type Step = 'date' | 'time' | 'form' | 'success';

function createDateRange(days: number): Date[] {
  const arr: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 0; i <= days; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    arr.push(d);
  }
  return arr;
}

export default function BookingModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<Step>('date');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dates = useMemo(() => createDateRange(14), []);

  useEffect(() => {
    if (!isOpen) {
      setStep('date');
      setSelectedDate(null);
      setSelectedTime(null);
      setName('');
      setEmail('');
      setMessage('');
      setError(null);
    }
  }, [isOpen]);

  const timeSlots = useMemo(() => {
    if (!selectedDate) return [];
    const slots = generateTimeSlots(selectedDate);
    const dateKey = getDateKey(selectedDate);
    return slots.filter((t) => !isSlotBooked(dateKey, t));
  }, [selectedDate]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError('Please fill in required fields.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    const booking: Booking = {
      id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
      date: getDateKey(selectedDate),
      time: selectedTime,
      duration: 30,
      name: name.trim(),
      email: email.trim(),
      message: message.trim() || undefined,
    };

    const res = createBooking(booking);
    if (!res.ok) {
      setError(res.reason || 'This slot is no longer available. Please choose another.');
      setSubmitting(false);
      return;
    }

    // TODO: call backend to send emails and generate meeting link
    // await fetch('/api/book', { method: 'POST', body: JSON.stringify(booking) });

    setSubmitting(false);
    setStep('success');
  }

  function closeOnOverlay(e: React.MouseEvent) {
    if (e.target === e.currentTarget) onClose();
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onMouseDown={closeOnOverlay}
      >
        <motion.div
          className="relative max-w-xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-heading font-bold">Book a Meeting</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Close booking"
            >
              ×
            </button>
          </div>

          <div className="px-6 py-4 space-y-4">
            <p className="text-sm font-body text-gray-600">
              All times shown in your local timezone. Working hours: 9:00 AM – 5:00 PM (30-minute
              slots).
            </p>

            <div className="flex items-center gap-3 text-xs font-heading mb-2">
              {['Date', 'Time', 'Details'].map((label, idx) => {
                const currentIndex = ['date', 'time', 'form'].indexOf(step);
                const active = currentIndex >= idx;
                return (
                  <div key={label} className="flex items-center gap-1">
                    <div
                      className={`h-6 w-6 rounded-full flex items-center justify-center text-white ${
                        active ? 'bg-primary' : 'bg-gray-300'
                      }`}
                    >
                      {idx + 1}
                    </div>
                    <span className={active ? 'text-primary' : 'text-gray-400'}>{label}</span>
                    {idx < 2 && <div className="w-6 h-px bg-gray-200" />}
                  </div>
                );
              })}
            </div>

            {step === 'date' && (
              <div className="space-y-3">
                <p className="text-sm font-heading font-semibold text-gray-700">
                  1. Choose a date
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {dates.map((d) => {
                    const disabled = isDateDisabled(d);
                    const key = getDateKey(d);
                    const isSelected =
                      selectedDate && getDateKey(selectedDate) === key && !disabled;
                    const label = d.toLocaleDateString(undefined, {
                      weekday: 'short',
                      month: 'short',
                      day: 'numeric',
                    });
                    return (
                      <button
                        key={key}
                        disabled={disabled}
                        onClick={() => {
                          setSelectedDate(d);
                          setSelectedTime(null);
                          setStep('time');
                        }}
                        className={`px-2 py-2 rounded-lg text-xs sm:text-sm font-body border transition-all ${
                          disabled
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : isSelected
                            ? 'bg-primary text-white border-primary shadow-md'
                            : 'bg-white text-gray-700 hover:bg-purple-50 border-gray-200'
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 'time' && selectedDate && (
              <div className="space-y-3">
                <p className="text-sm font-heading font-semibold text-gray-700">
                  2. Choose a time on{' '}
                  {selectedDate.toLocaleDateString(undefined, {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
                {timeSlots.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No available slots for this day. Please go back and pick another date.
                  </p>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((t) => {
                      const selected = selectedTime === t;
                      return (
                        <button
                          key={t}
                          onClick={() => {
                            setSelectedTime(t);
                            setStep('form');
                          }}
                          className={`px-2 py-2 rounded-lg text-xs sm:text-sm font-body border transition-all ${
                            selected
                              ? 'bg-primary text-white border-primary shadow-md'
                              : 'bg-white text-gray-700 hover:bg-purple-50 border-gray-200'
                          }`}
                        >
                          {formatTimeLabel(t)}
                        </button>
                      );
                    })}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setStep('date')}
                  className="text-xs text-gray-500 hover:text-primary underline"
                >
                  ← Change date
                </button>
              </div>
            )}

            {step === 'form' && selectedDate && selectedTime && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-sm font-heading font-semibold text-gray-700">
                  3. Add your details
                </p>
                <p className="text-xs text-gray-500">
                  Booking:{' '}
                  {selectedDate.toLocaleDateString(undefined, {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                  })}{' '}
                  at {formatTimeLabel(selectedTime)} (30 minutes)
                </p>

                <div>
                  <label className="block text-sm font-heading mb-1" htmlFor="bm-name">
                    Name *
                  </label>
                  <input
                    id="bm-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading mb-1" htmlFor="bm-email">
                    Email *
                  </label>
                  <input
                    id="bm-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-heading mb-1" htmlFor="bm-message">
                    Message / purpose (optional)
                  </label>
                  <textarea
                    id="bm-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell me what you’d like to discuss..."
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-600 font-body" role="alert">
                    {error}
                  </p>
                )}

                <div className="flex items-center justify-between gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setStep('time')}
                    className="text-xs text-gray-500 hover:text-primary underline"
                  >
                    ← Change time
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="ml-auto inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-white text-sm font-heading font-semibold hover:bg-purple-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                  >
                    {submitting ? 'Booking…' : 'Confirm Booking'}
                  </button>
                </div>

                <p className="text-[11px] text-gray-500 mt-2">
                  You can message or email me anytime at{' '}
                  <a
                    href="mailto:info@assistnez.com"
                    className="text-primary underline underline-offset-2"
                  >
                    info@assistnez.com
                  </a>
                  . I’ll reply when available.
                </p>
              </form>
            )}

            {step === 'success' && (
              <div className="py-4 space-y-3 text-center">
                <p className="text-lg font-heading font-bold text-primary">
                  Meeting booked successfully!
                </p>
                <p className="text-sm font-body text-gray-600">
                  You’ll receive a confirmation email with your meeting details and link once email
                  sending is connected on the backend.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-white text-sm font-heading font-semibold hover:bg-purple-800 transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

