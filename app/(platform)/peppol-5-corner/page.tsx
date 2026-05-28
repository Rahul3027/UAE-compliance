import { ModulePage } from '@/components/learning/module-page';
import { modules } from '@/data/modules';

export default function Page(){ return <ModulePage title="peppol 5 corner" description={modules.generic.description} bullets={modules.generic.bullets as string[]} flow={modules.generic.flow as string[]} />; }
