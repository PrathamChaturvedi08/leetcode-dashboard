import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Input from "./components/ui/Input";

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-8">
      <Card className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold">CodePulse</h1>

        <Input label="Email" placeholder="Enter your email" />

        <Input label="Password" type="password" placeholder="Password" />

        <Button className="w-full">Login</Button>
      </Card>
    </div>
  );
}

export default App;
