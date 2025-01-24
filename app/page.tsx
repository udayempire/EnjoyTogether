import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import { ArrowDownCircleIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#1f2937] text-white min-h-screen overflow-y-hidden">
      {/* Joining Section */}
      <div className="relative h-screen flex items-center justify-center px-4 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-gradient"></div>
        </div>
          <Meteors  number={100}/>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in" >Experience Entertainment Together</h1>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 animate-fade-in-delay-1">
            Watch or listen to content together with your friends in real time. Create your own entertainment room and share moments that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button className="px-8 py-6 text-lg bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors">Create Room</Button>
            <Button className="px-8 py-6 text-lg bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-semibold transition-colors">Join Room</Button>
          </div>
          <p className="text-xl md:text-2xl text-neutral-300 mb-8 animate-fade-in-delay-1 pt-8 animate-pulse">
           Invite your Friends to Join The Fun  !
          </p>
          <div className="animate-bounce pt-4">
            <ArrowDownCircleIcon className="relative text-lg flex justify-between w-full items-center top-20 " size={54}/>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="py-20 px-4 lg:px-8 bg-neutral-800">
        <div className="max-w-6xl mx-auto" ></div>
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose EnjoyTogether?</h2>
        <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-neutral-700 rounded-lg">
                    <div className="text-purple-400 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Synchronized Playback</h3>
                    <p className="text-neutral-300">Watch videos and listen to music in perfect sync with your friends, no matter where they are.</p>
                </div>

                <div className="p-6 bg-neutral-700 rounded-lg">
                    <div className="text-purple-400 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Chat</h3>
                    <p className="text-neutral-300">Interact with room members through live chat while enjoying content together.</p>
                </div>

                <div className="p-6 bg-neutral-700 rounded-lg">
                    <div className="text-purple-400 mb-4">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Democratic Playlist</h3>
                    <p className="text-neutral-300">Vote on upcoming content and let the crowd decide what plays next.</p>
                </div>
            </div>
      </div>

    </div>
  );
}
