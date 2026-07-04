'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export function MenuList() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      const { data } = await supabase.from('menu_items').select('*').eq('is_available', true);
      if (data) setItems(data);
    }
    fetchMenu();
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {items.map((item) => (
        <div key={item.id} className="p-6 bg-white rounded-2xl shadow-sm border border-[#E9E3DD]">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-sm opacity-70 mb-4">{item.description}</p>
          <span className="font-bold text-[#5D4432]">£{item.price}</span>
        </div>
      ))}
    </div>
  );
}