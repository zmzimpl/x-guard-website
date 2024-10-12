import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Filter, Bell, History, Video, KeyRound, Tag, Users } from "lucide-react"
import Image from "next/image"
import { ChromeStoreButton } from "@/components/custom/chrome-store-button"
import { Twitter, Github } from "lucide-react"
export default function Home() {

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <Image src="/icon.png" width={64} height={64} alt="X Guard" className="w-16 h-16 mr-2" />
            <h1 className="text-5xl font-bold text-primary">X Guard</h1>
          </div>
          <p className="text-xl text-muted-foreground">Enhance Your X (Twitter) Experience</p>
        </header>

        <main>
          <section className="mb-20">
            <h2 className="text-4xl font-semibold text-center mb-8 text-primary">
              Everything about X,<br />in just <span className="text-primary">one extension</span>
            </h2>
            <div className="flex justify-center space-x-4 mb-12">
              <ChromeStoreButton />
            </div>
            <div className="relative">
              <Image
                src="/banner.png"
                alt="X Guard in action"
                width={800}
                height={400}
                className="rounded-lg shadow-2xl mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Trusted by 10,000+ users</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h3 className="text-3xl font-semibold text-center mb-12 text-primary">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Filter, text: "Ad Content Filtering: Removes sponsored and promotional content from your feed" },
                { icon: Bell, text: "Scam Alert: Identifies and filters out potential scam notifications" },
                { icon: History, text: "Handle Tracker: Monitors and logs username changes for accounts you follow" },
                { icon: Video, text: "Video Tweet Filter: Option to hide tweets containing only video content" },
                { icon: KeyRound, text: "Content Moderation: Blocks tweets containing user-defined sensitive keywords" },
                { icon: Tag, text: "Custom Tagging: Enables adding and managing permanent custom labels for user accounts" },
                { icon: Users, text: "Enhanced Metrics: Displays comprehensive follower statistics in your timeline" },
              ].map((feature, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex flex-col items-center p-6">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <p className="text-center text-primary font-medium">{feature.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h3 className="text-3xl font-semibold text-center mb-12 text-primary">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Install", description: "Add X Guard to your Chrome browser with just one click." },
                { title: "Customize", description: "Set your preferences and customize your X experience." },
                { title: "Enjoy", description: "Browse X with enhanced features and a cleaner interface." },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-primary">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h3 className="text-3xl font-semibold text-center mb-12 text-primary">What Our Users Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "John Doe",
                  comment: "X Guard has completely transformed my Twitter experience. No more ads and scams!",
                  image: "/avatar.svg"
                },
                {
                  name: "Jane Smith",
                  comment: "The custom tags feature is a game-changer. I can easily keep track of different accounts now.",
                  image: "/avatar2.svg"
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="flex items-start space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <p className="mb-2 text-muted-foreground italic">&quot; {testimonial.comment}&quot;</p>
                      <p className="font-semibold text-primary">- {testimonial.name}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center mb-20">
            <h3 className="text-3xl font-semibold mb-8 text-primary">Ready to enhance your X experience?</h3>
            <Button className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              Get X Guard Now - It&apos;s Free!
            </Button>
          </section>

          {/* social media links */}
          <section className="mb-20">
            <div className="flex justify-center space-x-4">
              <a href="https://x.com/zmzimpl" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-primary" />
              </a>
              <a href="https://github.com/zmzimpl" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-black" />
              </a>
            </div>
          </section>
        </main>



        <footer className="text-center text-muted-foreground">
          <p>&copy; 2023 4 Guard. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}
