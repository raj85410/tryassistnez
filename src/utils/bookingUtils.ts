import { BOOKING_CONFIG } from '../config/bookingConfig';

export type Booking = {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  duration: number;
  name: string;
  email: string;
  message?: string;
};

const STORAGE_KEY = 'assistnez_bookings_v1';

export function loadBookings(): Booking[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Booking[]) : [];
  } catch {
    return [];
  }
}

export function saveBookings(bookings: Booking[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function getBookingsForDate(date: string): Booking[] {
  return loadBookings().filter((b) => b.date === date);
}

export function isSlotBooked(date: string, time: string): boolean {
  const bookings = getBookingsForDate(date);
  return bookings.some((b) => b.time === time);
}

export function createBooking(booking: Booking): { ok: boolean; reason?: string } {
  if (isSlotBooked(booking.date, booking.time)) {
    return { ok: false, reason: 'Slot already booked' };
  }
  const all = loadBookings();
  all.push(booking);
  saveBookings(all);
  return { ok: true };
}

export function generateTimeSlots(date: Date): string[] {
  const cfg = BOOKING_CONFIG;
  const start = new Date(date);
  start.setHours(cfg.workStartHour, 0, 0, 0);
  const end = new Date(date);
  end.setHours(cfg.workEndHour, 0, 0, 0);

  const slots: string[] = [];
  const cursor = new Date(start);

  while (cursor < end) {
    const hour = cursor.getHours();
    const minutes = cursor.getMinutes();

    const inBreak =
      hour >= cfg.breakStartHour &&
      (hour < cfg.breakEndHour || (hour === cfg.breakEndHour && minutes === 0));

    if (!inBreak) {
      const h = String(hour).padStart(2, '0');
      const m = String(minutes).padStart(2, '0');
      slots.push(`${h}:${m}`);
    }

    cursor.setMinutes(cursor.getMinutes() + cfg.slotMinutes);
  }

  return slots;
}

export function formatTimeLabel(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const date = new Date();
  date.setHours(h, m, 0, 0);
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
}

export function getDateKey(d: Date): string {
  return d.toISOString().slice(0, 10);
}

export function isDateDisabled(d: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const cfg = BOOKING_CONFIG;
  const dow = d.getDay();

  if (d < today) return true;
  const diffDays = Math.floor((d.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  if (diffDays > cfg.maxDaysAhead) return true;
  if (cfg.disabledWeekdays.includes(dow)) return true;

  return false;
}

