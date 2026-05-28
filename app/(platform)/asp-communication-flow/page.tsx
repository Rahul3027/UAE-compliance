import { ModulePage } from '@/components/learning/module-page';
import { getModule } from '@/lib/get-module';

export default function Page() {
  return <ModulePage module={getModule('asp-communication-flow')} />;
}
