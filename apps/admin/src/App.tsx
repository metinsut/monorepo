import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';
import { About } from './pages/about';
import { formatPrice } from '@repo/shared';
import { configs } from '@brands/current';

function App() {
  return (
    <main className="grid justify-start p-2 gap-2">
      <Button className="bg-destructive">Click me</Button>
      <h1 className="text-3xl font-bold underline">Vite</h1>
      <Input />
      <About />
      <p>{formatPrice(55555555555)}</p>
      <p>{configs.name}</p>
    </main>
  );
}

export default App;
