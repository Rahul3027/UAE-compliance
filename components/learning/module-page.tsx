'use client';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ModulePageProps { title:string; description:string; bullets:string[]; flow:string[]; }

export function ModulePage({title,description,bullets,flow}:ModulePageProps){
  const data = flow.map((name,i)=>({name,step:i+1}));
  return <div className="space-y-6"><motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="panel p-6"><h2 className="text-2xl font-semibold text-cyan-300">{title}</h2><p className="text-slate-300 mt-2">{description}</p></motion.div><div className="grid lg:grid-cols-2 gap-6"><div className="panel p-6"><h3 className="font-medium mb-3">Engineering Focus</h3><ul className="space-y-2">{bullets.map(b=><li key={b} className="text-sm text-slate-300">• {b}</li>)}</ul></div><div className="panel p-6 h-72"><h3 className="font-medium mb-3">Process Intensity</h3><ResponsiveContainer width="100%" height="90%"><BarChart data={data}><XAxis dataKey="name" hide /><YAxis /><Tooltip /><Bar dataKey="step" fill="#22d3ee" radius={[6,6,0,0]} /></BarChart></ResponsiveContainer></div></div><div className="panel p-6"><h3 className="font-medium mb-3">Workflow</h3><div className="flex flex-wrap gap-2">{flow.map((f,i)=><div key={f} className="px-3 py-2 bg-slate-800 rounded-lg text-sm">{i+1}. {f}</div>)}</div></div></div>
}
