'use client';
//<<<<<<< codex/build-interactive-learning-platform-for-uae-e-invoicing-otntqp

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { LearningModule } from '@/types/module';
import { MetricCard } from '@/components/ui/metric-card';
import { WorkflowTimeline } from '@/components/diagrams/workflow-timeline';

export function ModulePage({ module }: { module: LearningModule }) {
  const chartData = module.flow.map((item, index) => ({ name: item.name, intensity: index + 1 }));

  return (
    <div className="space-y-6">
      <motion.header initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="panel p-6">
        <p className="text-xs uppercase tracking-widest text-cyan-300">PEPPOL PINT AE</p>
        <h2 className="text-3xl font-semibold mt-2">{module.title}</h2>
        <p className="text-slate-300 mt-2 max-w-3xl">{module.description}</p>
      </motion.header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {module.metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
      </section>

      <section className="grid lg:grid-cols-2 gap-6">
        <div className="panel p-6">
          <h3 className="font-medium mb-3">Technical Highlights</h3>
          <ul className="space-y-2">
            {module.highlights.map((highlight) => (
              <li key={highlight} className="text-sm text-slate-300">• {highlight}</li>
            ))}
          </ul>
          <div className="mt-4 rounded-lg border border-slate-700 bg-slate-900/70 p-3 text-xs text-slate-400">
            Tip: Use this module as a training map for ERP analysts, integration engineers, and compliance teams.
          </div>
        </div>

        <div className="panel p-6 h-80">
          <h3 className="font-medium mb-3">Flow Complexity Profile</h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} angle={-20} textAnchor="end" height={60} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="intensity" fill="#22d3ee" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <WorkflowTimeline flow={module.flow} />
    </div>
  );
//=======
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ModulePageProps { title:string; description:string; bullets:string[]; flow:string[]; }

export function ModulePage({title,description,bullets,flow}:ModulePageProps){
  const data = flow.map((name,i)=>({name,step:i+1}));
  return <div className="space-y-6"><motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="panel p-6"><h2 className="text-2xl font-semibold text-cyan-300">{title}</h2><p className="text-slate-300 mt-2">{description}</p></motion.div><div className="grid lg:grid-cols-2 gap-6"><div className="panel p-6"><h3 className="font-medium mb-3">Engineering Focus</h3><ul className="space-y-2">{bullets.map(b=><li key={b} className="text-sm text-slate-300">• {b}</li>)}</ul></div><div className="panel p-6 h-72"><h3 className="font-medium mb-3">Process Intensity</h3><ResponsiveContainer width="100%" height="90%"><BarChart data={data}><XAxis dataKey="name" hide /><YAxis /><Tooltip /><Bar dataKey="step" fill="#22d3ee" radius={[6,6,0,0]} /></BarChart></ResponsiveContainer></div></div><div className="panel p-6"><h3 className="font-medium mb-3">Workflow</h3><div className="flex flex-wrap gap-2">{flow.map((f,i)=><div key={f} className="px-3 py-2 bg-slate-800 rounded-lg text-sm">{i+1}. {f}</div>)}</div></div></div>
//>>>>>>> main
}
