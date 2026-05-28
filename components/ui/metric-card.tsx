import { MetricCard as MetricCardType } from '@/types/module';

export function MetricCard({ label, value, trend }: MetricCardType) {
  return (
    <article className="panel p-4">
      <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
      <p className="text-2xl font-semibold text-cyan-300 mt-1">{value}</p>
      <p className="text-xs text-emerald-300 mt-1">{trend}</p>
    </article>
  );
}
