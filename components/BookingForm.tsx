'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from('bookings').insert({
      customer_name: formData.get('name'),
      email: formData.get('email'),
      booking_date: formData.get('date'),
      start_time: formData.get('time'),
      duration: `${formData.get('duration')} hours`,
    });

    setStatus(error ? 'error' : 'success');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" required placeholder="Name" className="w-full p-4 rounded-lg text-[#3E2B1E]" />
      <input name="email" type="email" required placeholder="Email" className="w-full p-4 rounded-lg text-[#3E2B1E]" />
      <input name="date" type="date" required className="w-full p-4 rounded-lg text-[#3E2B1E]" />
      <div className="grid grid-cols-2 gap-4">
        <input name="time" type="time" required className="p-4 rounded-lg text-[#3E2B1E]" />
        <select name="duration" className="p-4 rounded-lg text-[#3E2B1E]">
          <option value="1">1 Hour</option>
          <option value="2">2 Hours</option>
        </select>
      </div>
      <button disabled={status === 'loading'} className="w-full bg-[#E9E3DD] text-[#5D4432] py-4 rounded-full font-bold hover:bg-white transition-colors">
        {status === 'loading' ? 'Sending...' : 'send booking request'}
      </button>
      {status === 'success' && <p className="text-center font-bold">Request received! We'll be in touch.</p>}
    </form>
  );
}