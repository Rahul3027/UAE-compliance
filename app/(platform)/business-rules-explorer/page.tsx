import { ModulePage } from '@/components/learning/module-page';
//<<<<<<< codex/build-interactive-learning-platform-for-uae-e-invoicing-otntqp
import { getModule } from '@/lib/get-module';

export default function Page() {
  return <ModulePage module={getModule('business-rules-explorer')} />;
}
//=======
import { modules } from '@/data/modules';

export default function Page(){ return <ModulePage title="business rules explorer" description={modules.generic.description} bullets={modules.generic.bullets as string[]} flow={modules.generic.flow as string[]} />; }
//>>>>>>> main
