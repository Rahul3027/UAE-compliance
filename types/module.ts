export interface MetricCard {
  label: string;
  value: string;
  trend: string;
}

export interface FlowStep {
  name: string;
  details: string;
}

export interface LearningModule {
  slug: string;
  title: string;
  description: string;
  metrics: MetricCard[];
  highlights: string[];
  flow: FlowStep[];
}
