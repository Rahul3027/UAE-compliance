import { ModulePage } from '@/components/learning/module-page';
//<<<<<<< codex/build-interactive-learning-platform-for-uae-e-invoicing-otntqp
import { getModule } from '@/lib/get-module';

export default function Page() {
  return <ModulePage module={getModule('dashboard')} />;
}
//=======
import { modules } from '@/data/modules';

export default function Page(){ return <ModulePage title={modules.dashboard.title} description={modules.dashboard.description} bullets={modules.dashboard.bullets as string[]} flow={modules.dashboard.flow as string[]} />; }
//>>>>>>> main
