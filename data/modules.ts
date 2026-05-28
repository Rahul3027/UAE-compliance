//<<<<<<< codex/build-interactive-learning-platform-for-uae-e-invoicing-otntqp
import { LearningModule } from '@/types/module';

export const moduleContent: LearningModule[] = [
  {
    slug: 'dashboard',
    title: 'UAE PINT AE Command Dashboard',
    description: 'Live architecture overview for UAE e-invoicing implementation teams with lifecycle, network, and validation visibility.',
    metrics: [
      { label: 'Validation Coverage', value: '98.2%', trend: '+1.1%' },
      { label: 'Avg ASP Latency', value: '430ms', trend: '-9%' },
      { label: 'Rejected Invoices', value: '3.4%', trend: '-0.8%' }
    ],
    highlights: ['PEPPOL participant readiness map', 'Invoice lifecycle progression', 'FTA response telemetry'],
    flow: [
      { name: 'ERP', details: 'Source invoice payload emitted from SAP/Oracle/Custom ERP.' },
      { name: 'XML Generator', details: 'UBL + PINT AE mapping and schema shaping.' },
      { name: 'PINT AE Validation', details: 'Structural and business rule validation pass.' },
      { name: 'ASP Transmission', details: 'Invoice signed, queued, and pushed to certified ASP.' },
      { name: 'PEPPOL Network', details: '5-corner routing across access points.' },
      { name: 'FTA', details: 'Regulatory visibility and tax compliance checks.' },
      { name: 'Response Processing', details: 'ACK/NACK ingestion and ERP status synchronization.' }
    ]
  },
  ...[
    'uae-overview','peppol-5-corner','pint-ae-architecture','invoice-lifecycle','xml-structure-explorer','validation-engine-simulator','erp-integration-center','api-data-flow','business-rules-explorer','asp-communication-flow','tax-logic-visualization','response-status-lifecycle','error-rejection-simulator','sandbox-testing-center','developer-learning-center','glossary-technical-terms'
  ].map((slug) => ({
    slug,
    title: slug.split('-').map((w)=>w[0].toUpperCase()+w.slice(1)).join(' '),
    description: 'Deep-dive module with implementation-grade technical context, architecture mapping, and operational guidance for UAE PEPPOL PINT AE.',
    metrics: [
      { label: 'Scenario Pack', value: '24', trend: 'Updated' },
      { label: 'Rule Assertions', value: '130+', trend: 'Expanded' },
      { label: 'Examples', value: '42', trend: 'Curated' }
    ],
    highlights: ['Implementation playbooks', 'Failure-path simulation', 'Integration observability patterns'],
    flow: [
      { name: 'Model', details: 'Define source business event and payload contract.' },
      { name: 'Transform', details: 'Normalize data and map to XML business terms.' },
      { name: 'Validate', details: 'Apply syntax, cardinality, and tax logic rules.' },
      { name: 'Transmit', details: 'Route via ASP and PEPPOL network.' },
      { name: 'Acknowledge', details: 'Capture delivery + processing statuses.' },
      { name: 'Archive', details: 'Persist immutable compliance evidence.' }
    ]
  }))
];

export const moduleBySlug = Object.fromEntries(moduleContent.map((module) => [module.slug, module]));
//=======
export const modules = {
  dashboard: {title:'UAE PINT AE Dashboard',description:'Interactive cockpit for enterprise e-invoicing compliance journeys.',bullets:['Ecosystem health indicators','Learning progression','System architecture readiness'],flow:['ERP','XML Generator','PINT AE Validation','ASP Transmission','PEPPOL Network','FTA','Response Processing']},
  generic: {description:'Production-grade, scenario-driven module for UAE PEPPOL PINT AE implementation engineering.',bullets:['Business + technical mapping','Validation and rejection modeling','Integration and observability best practices'],flow:['Author','Transform','Validate','Transmit','Acknowledge','Archive']}
} as const;
//>>>>>>> main
