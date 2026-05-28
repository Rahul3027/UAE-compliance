import { ModulePage } from '@/components/learning/module-page';
//<<<<<<< codex/build-interactive-learning-platform-for-uae-e-invoicing-otntqp
import { getModule } from '@/lib/get-module';

export default function Page() {
  return <ModulePage module={getModule('pint-ae-architecture')} />;
}
//=======
import { modules } from '@/data/modules';

export default function Page(){ return <ModulePage title="pint ae architecture" description={modules.generic.description} bullets={modules.generic.bullets as string[]} flow={modules.generic.flow as string[]} />; }
//>>>>>>> main
