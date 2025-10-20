import Header from '@/components/Header/Header.jsx';
import CoreConcepts from '@/components/Sections/CoreConcepts.jsx';
import Examples from '@/components/Sections/Examples.jsx';

import '@/App.scss';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
