// // FAQCard.js
// export default function FAQCard({ category, icon, onClick, isActive }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`
//         relative
//         flex flex-col items-center justify-center 
//         p-6 rounded-xl
//         transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
//         overflow-hidden
//         group
//         border-2
//         transform-gpu
//         will-change-transform
//         ${isActive 
//           ? 'bg-gradient-to-br from-afi-orange/90 to-afi-orange text-white shadow-2xl scale-105' 
//           : 'bg-gradient-to-br from-afi-dark/95 to-afi-dark/80 text-white/95 border-afi-dark/30 hover:border-afi-orange/40 hover:scale-[1.03]'}
//         hover:shadow-xl
//         hover:-translate-y-2
//       `}
//       style={{
//         transformStyle: 'preserve-3d',
//         perspective: '1000px'
//       }}
//     >
//       {/* 3D depth effect container */}
//       <div className="absolute inset-0 rounded-xl overflow-hidden">
//         {/* Depth shadow layer */}
//         <div className="
//           absolute inset-0 bg-black/10
//           transition-all duration-500
//           group-hover:opacity-0
//           group-hover:scale-90
//         " />
        
//         {/* Floating light effect */}
//         <div className="
//           absolute -inset-8 opacity-0
//           bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3)_0%,_transparent_70%)]
//           transition-all duration-700
//           group-hover:opacity-100
//           group-hover:-translate-x-3 group-hover:-translate-y-3
//         " />
//       </div>
      
//       {/* Icon with 3D float effect */}
//       <div className="
//         relative z-10
//         mb-4 p-3 rounded-full
//         bg-gradient-to-br from-white/20 to-white/10
//         backdrop-blur-[6px]
//         border border-white/15
//         shadow-[inset_0_4px_12px_rgba(255,255,255,0.15),_0_4px_12px_rgba(0,0,0,0.1)]
//         transition-all duration-700 ease-out
//         group-hover:scale-125 group-hover:-translate-y-2
//         group-hover:shadow-[inset_0_6px_16px_rgba(255,255,255,0.2),_0_8px_24px_rgba(0,0,0,0.15)]
//         ${isActive ? 'scale-110 -translate-y-1' : ''}
//       " 
//       style={{
//         transformStyle: 'preserve-3d',
//         willChange: 'transform, box-shadow'
//       }}>
//         <span className="
//           text-3xl
//           block transition-all duration-700
//           ${isActive ? 'text-white drop-shadow-lg' : 'text-white/90 group-hover:text-white drop-shadow-md'}
//         ">
//           {icon}
//         </span>
//       </div>
      
//       {/* Category text with 3D extrusion */}
//       <div className="relative z-10" style={{ perspective: '1000px' }}>
//         <span className="
//           relative
//           font-semibold text-lg tracking-wide
//           bg-clip-text text-transparent
//           bg-gradient-to-r from-white to-white/85
//           transition-all duration-500
//           group-hover:translate-y-1
//           inline-block
//         "
//         style={{
//           transformStyle: 'preserve-3d',
//           willChange: 'transform'
//         }}>
//           {category}
//           {/* 3D text shadow */}
//           <span className="
//             absolute inset-0
//             bg-clip-text text-transparent
//             bg-gradient-to-r from-white/30 to-white/10
//             transition-all duration-500
//             group-hover:translate-z-4
//             ${isActive ? 'translate-z-4' : 'translate-z-0'}
//           " aria-hidden="true">
//             {category}
//           </span>
//         </span>
        
//         {/* Animated underline with depth */}
//         <div className="
//           relative h-0.5 mt-1 overflow-hidden
//         ">
//           <div className="
//             absolute inset-0
//             bg-gradient-to-r from-transparent via-white/80 to-transparent
//             transition-all duration-700
//             ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}
//           " />
//         </div>
//       </div>
      
//       {/* Active state 3D glow */}
//       {isActive && (
//         <div className="
//           absolute -inset-2 rounded-xl
//           bg-gradient-to-br from-afi-orange/40 to-transparent
//           animate-pulse-slow
//           opacity-80
//           blur-md
//         " />
//       )}
      
//       {/* Hover state particle effect */}
//       <div className="
//         absolute inset-0 overflow-hidden rounded-xl
//         before:absolute before:inset-0
//         before:bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),rgba(255,255,255,0.15)_0%,transparent_70%)]
//         before:opacity-0 before:group-hover:opacity-100
//         before:transition-opacity before:duration-1000
//       " 
//       onPointerMove={(e) => {
//         const card = e.currentTarget;
//         const rect = card.getBoundingClientRect();
//         card.style.setProperty('--x', `${e.clientX - rect.left}px`);
//         card.style.setProperty('--y', `${e.clientY - rect.top}px`);
//       }} />
      
//       {/* 3D shadow that reacts to hover */}
//       <div className="
//         absolute -bottom-4 left-1/2 -translate-x-1/2
//         w-[80%] h-4
//         bg-gradient-to-b from-black/15 to-transparent
//         rounded-[50%]
//         filter blur-[8px]
//         transition-all duration-500
//         group-hover:w-[70%] group-hover:opacity-70 group-hover:-translate-y-1
//         ${isActive ? 'opacity-50' : 'opacity-30'}
//       " />
//     </button>
//   );
// }

export default function FAQCard({ category, icon, onClick, isActive }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex flex-col items-center justify-center 
        p-6 rounded-xl overflow-hidden group border-2
        transition-transform duration-300 ease-in-out
        ${isActive 
          ? 'bg-gradient-to-br from-afi-orange/90 to-afi-orange text-white shadow-xl' 
          : 'bg-gradient-to-br from-afi-dark/95 to-afi-dark/80 text-white/95 border-afi-dark/30 hover:border-afi-orange/40 hover:shadow-lg hover:-translate-y-1'}
      `}
    >
      {/* Floating icon container */}
      <div className={`
        relative z-10 mb-4 p-3 rounded-full
        bg-white/5 backdrop-blur-sm
        border border-white/10
        transition-all duration-300
        ${isActive ? 'scale-105 -translate-y-0.5' : 'group-hover:scale-105 group-hover:-translate-y-1'}
      `}>
        <span className={`
          text-3xl block transition-colors duration-300
          ${isActive ? 'text-white' : 'text-white/90 group-hover:text-white'}
        `}>
          {icon}
        </span>
      </div>

      {/* Category text */}
      <span className={`
        relative z-10 font-semibold text-lg tracking-wide
        bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80
        transition-all duration-300
      `}>
        {category}
        <span className={`
          absolute -bottom-1 left-0 right-0 h-0.5
          bg-gradient-to-r from-transparent via-white to-transparent
          scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left
          ${isActive ? 'scale-x-100' : ''}
        `} />
      </span>

      {/* Active glow */}
      {isActive && (
        <div className="
          absolute -inset-1 rounded-xl
          bg-gradient-to-br from-afi-orange/40 to-transparent
          animate-pulse-slow
        " />
      )}
    </button>
  );
}
