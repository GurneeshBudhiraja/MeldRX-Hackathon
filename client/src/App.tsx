import { Header } from './components/components';
import { MainContent } from './page/page';

function App() {
  return (
    <div className="bg-main-background h-dvh w-full text-zinc-950 ">
      {/* Header */}
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
