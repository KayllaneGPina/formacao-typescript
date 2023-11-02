import { Card } from './Components/Card';
import { Layout } from './Components/Layout';

function App() {
  return (
    <Layout>
      Hello world
      <Card
        id={1}
        paragraph='TypeScript'
        details='TS para frontend e backend'
      />

      <Card
        id={2}
        paragraph='HTML'
        details='HTML para frontend'
      />

      <Card
        id={3}
        paragraph='SQL'
        details='SQL para banco de dados'
      />
    </Layout>
  );
}

export default App;
