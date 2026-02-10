import { useState } from 'react';
import BookingModal from './BookingModal';

function BookMeetingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-4 sm:right-6 z-40 px-4 py-2 rounded-full bg-primary text-white text-sm font-heading font-semibold shadow-lg hover:bg-purple-800 hover:shadow-xl transition-transform duration-200 transform hover:scale-105"
      >
        Book a Meeting
      </button>
      <BookingModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default BookMeetingButton;

