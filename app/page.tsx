import { ScrollArea } from "@/components/ui/scroll-area";
import { Sidebar } from "@/components/profile/sidebar";
import { MainContent } from "@/components/profile/main-content";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Sidebar />
      <main className="flex-1">
        <ScrollArea className="h-screen">
          <MainContent />
        </ScrollArea>
      </main>
    </div>
  );
}