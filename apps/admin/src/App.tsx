import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';

function App() {
  return (
    <main className="flex p-2">
      <Button className={cn('bg-destructive')}>Click me</Button>
      <h1 className="text-3xl font-bold underline">Vite</h1>
    </main>
  );
}

export default App;
