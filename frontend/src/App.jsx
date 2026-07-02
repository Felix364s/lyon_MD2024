// App.jsx
import AppRoutes from "./routes/AppRoutes";
import BottomNav from "./components/BottomNav";
import ThemeToggle from "./components/ThemeToggle"; 

function App() {
  return (
    <div class="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto min-h-screen flex flex-col">

        <header className=" relative flex items-center px-4 overflow-hidden inset-0 h-50">

          <div className="absolute inset-0">
            <video
              
              src={'https://youtu.be/AR2IluWB1kU'}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            
          </div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>

          <h2 className="relative font-oswald text-4xl font-bold text-white mr-2">LYON</h2>
          <h2 className="relative font-oswald text-4xl font-bold text-emerald-600">SERVICES</h2>

        </header>

        <main className="flex-1 overflow-auto">
          <AppRoutes />
        </main>
        
          <BottomNav />
      </div>
    </div>
  );
}

export default App;