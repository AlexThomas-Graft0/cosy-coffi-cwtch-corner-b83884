import { Suspense } from 'react';
import { BookingForm } from '@/components/BookingForm';
import { MenuList } from '@/components/MenuList';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">your home away from home.</h1>
        <p className="text-xl max-w-2xl mb-12">A dim-lit escape in the heart of Cardiff. Whether you’re looking for a quiet corner to read or a space to reconnect, we’ve got a brew waiting for you.</p>
        <div className="flex gap-4">
          <a href="#booking" className="bg-[#5D4432] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">book your nook</a>
          <a href="#menu" className="border-2 border-[#5D4432] px-8 py-4 rounded-full font-semibold hover:bg-[#E9E3DD] transition-colors">explore our menu</a>
        </div>
      </section>

      {/* Cwtch Teaser */}
      <section className="py-24 px-8 bg-[#E9E3DD]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">stay a while.</h2>
          <p className="text-lg mb-8">Our private nooks are designed for comfort. Reserve your space in advance and enjoy a distraction-free hour (or three) with your favourite coffee.</p>
          <a href="#booking" className="inline-block bg-[#5D4432] text-white px-8 py-4 rounded-full">reserve a nook</a>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 px-8">
        <h2 className="text-4xl font-bold text-center mb-16">what’s brewing today.</h2>
        <Suspense fallback={<div className="text-center">Loading menu...</div>}>
          <MenuList />
        </Suspense>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 px-8 bg-[#5D4432] text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">secure your quiet corner.</h2>
          <p className="mb-12">Booking a nook ensures you have a dedicated space to work, read, or chat. Please select a date and time below to start your request.</p>
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm opacity-60">
        © 2026 Cosy Coffi Cwtch Corner, Cardiff.
      </footer>
    </main>
  );
}