'use client';

import { motion } from 'framer-motion';
import { FlowStep } from '@/types/module';

export function WorkflowTimeline({ flow }: { flow: FlowStep[] }) {
  return (
    <div className="panel p-6">
      <h3 className="font-medium mb-4">Workflow Timeline</h3>
      <div className="space-y-3">
        {flow.map((step, idx) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.04 }}
            className="rounded-lg border border-cyan-500/20 bg-slate-900/70 p-3"
          >
            <p className="text-sm font-medium text-cyan-200">{idx + 1}. {step.name}</p>
            <p className="text-xs text-slate-300 mt-1">{step.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
