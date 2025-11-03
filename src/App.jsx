import HeroBanner from './components/HeroBanner';
import ForestWalkScene from './components/ForestWalkScene';
import ResearchShowcase from './components/ResearchShowcase';
import TreePlantingCTA from './components/TreePlantingCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-amber-900">
      <HeroBanner />
      <ForestWalkScene />
      <ResearchShowcase />
      <TreePlantingCTA />
      <footer className="border-t border-amber-200 bg-amber-50">
        <div className="container mx-auto px-6 py-8 text-center text-amber-800/80">
          © {new Date().getFullYear()} Willow Grove Nature Sanctuary · Made with care for the forest
        </div>
      </footer>
    </div>
  );
}

export default App;
