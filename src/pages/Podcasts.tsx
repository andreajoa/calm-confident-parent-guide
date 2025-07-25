import { Headphones, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import PodcastSEO from "@/components/PodcastSEO";

interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  spotifyUrl: string;
  publishDate: string;
}

const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "1",
    title: "Quick Guide to Attention-Deficit Hyperactivity Disorder (ADHD)",
    description: "Essential insights and strategies for understanding ADHD in children and families.",
    spotifyUrl: "https://open.spotify.com/episode/5Oovgz67mdapn6EVHN9Vo0?si=AYuRwYfkSlmCKp-miDrD_Q",
    publishDate: "2024-01-15"
  },
  {
    id: "2", 
    title: "Strategies for Calm and Confident Parenting",
    description: "Practical approaches to create a peaceful home environment for neurodivergent children.",
    spotifyUrl: "https://open.spotify.com/episode/6qGbnyxZ6cShILYczh7yYv?si=nUumVwmLQhqalZrd9Y3_Vw",
    publishDate: "2024-01-22"
  }
];

const Podcasts = () => {
  const handleListenClick = (spotifyUrl: string) => {
    window.open(spotifyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <PodcastSEO />
      <div className="min-h-screen bg-background">
        {/* SEO Headers */}
        <header style={{ display: 'none' }}>
          <h1>The Calm & Confident Parent - Podcast Episodes</h1>
          <p>Expert advice and practical strategies for ADHD and autism families by Margareth Almeida</p>
        </header>
      {/* Header */}
      <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to site</span>
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Headphones className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Podcasts</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Published Episodes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Listen to our episodes about practical strategies for ADHD and autism families. 
            Each episode offers valuable insights and tools to create a calmer and more confident environment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {podcastEpisodes.map((episode, index) => (
            <Card key={episode.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Headphones className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Episode {index + 1}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {episode.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {episode.description}
                </p>
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground">
                    Published on {new Date(episode.publishDate).toLocaleDateString('en-US')}
                  </p>
                  <Button 
                    onClick={() => handleListenClick(episode.spotifyUrl)}
                    className="w-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white flex items-center justify-center space-x-2"
                  >
                    <span>Listen on Spotify</span>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="mt-12 text-center">
          <div className="max-w-md mx-auto p-6 border border-dashed border-muted-foreground/30 rounded-lg">
            <Headphones className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">
              More episodes coming soon
            </h3>
            <p className="text-sm text-muted-foreground">
              New episodes are published regularly. Check back soon for more content.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Podcasts;