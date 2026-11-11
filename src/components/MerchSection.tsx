import React, { useState } from 'react';
import { ShoppingBag, Check, ArrowRight } from 'lucide-react';
import { merchItems, MerchItem } from '../data/artistData';

export const MerchSection: React.FC = () => {
  const [cartCount, setCartCount] = useState(0);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAddToCart = (item: MerchItem) => {
    setCartCount(prev => prev + 1);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <div className="bg-[#121216]/80 backdrop-blur-md border border-zinc-800 rounded-2xl p-5 shadow-xl">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-amber-400" />
          <h3 className="font-bold text-zinc-100 tracking-wider text-sm font-mono-code uppercase">
            // Brooklyn Vault Merch
          </h3>
        </div>
        <div className="flex items-center gap-2 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800 text-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-zinc-300 font-mono-code">Cart: {cartCount}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {merchItems.map((item) => (
          <div 
            key={item.id}
            className="group bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-square overflow-hidden bg-zinc-950">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-xs font-mono-code font-bold text-amber-400 border border-amber-500/30">
                  {item.price}
                </div>
              </div>

              <div className="p-3">
                <h4 className="font-bold text-xs text-zinc-200 tracking-wide line-clamp-1 group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h4>
                <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1">
                  {item.tag}
                </p>
              </div>
            </div>

            <div className="p-3 pt-0">
              <button
                onClick={() => handleAddToCart(item)}
                disabled={item.soldOut}
                className={`w-full py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  addedItem === item.id 
                    ? 'bg-emerald-500 text-black' 
                    : item.soldOut
                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                    : 'bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-200'
                }`}
              >
                {addedItem === item.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added to Cart</span>
                  </>
                ) : item.soldOut ? (
                  <span>Sold Out</span>
                ) : (
                  <>
                    <span>Grab Drop</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
