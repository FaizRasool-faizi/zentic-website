// "use client";

// import { motion } from "framer-motion";

// export default function Founder() {
//   return (
//     <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
//       <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

//       <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Building Digital Brands with{" "}
//             <span className="text-orange-500">Design, Code & Intelligence</span>
//           </h2>

//           <p className="text-zinc-300 text-lg leading-relaxed mb-6">
//             I founded <span className="text-white font-semibold">ZENTIC</span>{" "}
//             with one clear mission — to help businesses grow using a powerful
//             mix of modern{" "}
//             <span className="text-white">web development</span>,{" "}
//             <span className="text-white">AI automation</span>, and strong{" "}
//             <span className="text-white">brand identity</span>.
//           </p>

//           <p className="text-zinc-400 leading-relaxed mb-8">
//             From high-performance websites and intelligent AI chatbots to
//             business automation and Canva-based branding solutions, I focus on
//             building systems that don’t just look good — they actually work.
//           </p>

//           <p className="text-orange-400 font-semibold">
//             Turning ideas into scalable digital systems.
//           </p>
//         </motion.div>

//         {/* Right Cards */}
//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="grid grid-cols-2 gap-6"
//         >
//           {[
//             {
//               title: "Web Development",
//               desc: "Modern, fast & scalable websites",
//               icon: "🌐",
//             },
//             {
//               title: "AI & Automation",
//               desc: "Smart workflows & agentic AI",
//               icon: "🤖",
//             },
//             {
//               title: "Chatbots",
//               desc: "AI-powered customer support",
//               icon: "💬",
//             },
//             {
//               title: "Brand Identity",
//               desc: "Logos, Canva & social designs",
//               icon: "🎨",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-zinc-900/70 backdrop-blur border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"
//             >
//               <div className="text-3xl mb-4">{item.icon}</div>
//               <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
//               <p className="text-sm text-zinc-400">{item.desc}</p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
