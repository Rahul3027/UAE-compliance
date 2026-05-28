import { ModulePage } from '@/components/learning/module-page';

import { getModule } from '@/lib/get-module';

export default function Page() {
  return <ModulePage module={getModule('api-data-flow')} />;
}

import { modules } from '@/data/modules';

export default function Page(){ return <ModulePage title="api data flow" description={modules.generic.description} bullets={modules.generic.bullets as string[]} flow={modules.generic.flow as string[]} />; }

