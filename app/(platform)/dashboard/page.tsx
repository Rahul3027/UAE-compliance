import { ModulePage } from '@/components/learning/module-page';
import { modules } from '@/data/modules';

export default function Page(){ return <ModulePage title={modules.dashboard.title} description={modules.dashboard.description} bullets={modules.dashboard.bullets as string[]} flow={modules.dashboard.flow as string[]} />; }
