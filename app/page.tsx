import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-[#1f2937] text-white min-h-screen">
      <div className="relative h-screen flex items-center justify-center px-4 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-gradient"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in" >Experience Entertainment Together</h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 animate-fade-in-delay-1">
            Watch or listen to content together with your friends in real time. Create your own entertainment room and share moments that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button className="px-8 py-6 text-lg bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">Create Room</Button>
            <Button className="px-8 py-6 text-lg bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-semibold transition-colors">Join Room</Button>
          </div>
        </div>
      </div>

    </div>
  );
}
