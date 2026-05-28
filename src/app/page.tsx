import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, Upload, Shield, Zap, Search, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden flex flex-col justify-between">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <main className="container mx-auto px-6 py-20 flex-grow flex flex-col items-center justify-center text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-background/50 backdrop-blur-sm text-xs font-semibold text-primary mb-8 animate-fade-in shadow-sm">
          <Zap className="size-3.5 fill-primary" />
          <span>Powered by Next.js & OpenAI</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl leading-[1.1] mb-6">
          Supercharge Conversations with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 drop-shadow-sm">
            Context & Intelligence
          </span>
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
          Upload PDF documents, extract knowledge chunks, and query an AI assistant that recalls every detail perfectly using advanced Vector RAG technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mb-20">
          <Link href="/chat" className="w-full">
            <Button size="lg" className="w-full group shadow-md hover:shadow-lg transition-all gap-2 text-base font-semibold py-6">
              <MessageSquare className="size-5 transition-transform group-hover:scale-110" />
              Launch Chatbot
            </Button>
          </Link>
          <Link href="/upload" className="w-full">
            <Button size="lg" variant="outline" className="w-full shadow-sm hover:shadow-md transition-all gap-2 text-base font-semibold py-6 bg-background/50 backdrop-blur-sm">
              <Upload className="size-5" />
              Upload PDF
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full text-left">
          {/* Card 1 */}
          <div className="group border p-6 rounded-2xl bg-background/40 backdrop-blur-sm hover:bg-background/80 hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <FileText className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Smart PDF Chunking</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Extract high-fidelity text blocks from your uploaded PDF documents using advanced text splitters.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group border p-6 rounded-2xl bg-background/40 backdrop-blur-sm hover:bg-background/80 hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Search className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Vector Similarity Search</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Execute low-latency cosine distance vector matching directly over Neon Serverless Postgres with Drizzle ORM.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group border p-6 rounded-2xl bg-background/40 backdrop-blur-sm hover:bg-background/80 hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Shield className="size-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Secure & Scalable Auth</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fully integrated Clerk session middleware to safeguard your documents and ensure private conversations.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 backdrop-blur-sm z-10">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} RAG Chatbot. Built with Google Gemini Advanced Pairing.</p>
          <div className="flex gap-4">
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">Next.js Docs</a>
            <a href="https://sdk.vercel.ai/docs" target="_blank" rel="noopener noreferrer" className="hover:underline">AI SDK</a>
            <a href="https://neon.tech" target="_blank" rel="noopener noreferrer" className="hover:underline">Neon Database</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
