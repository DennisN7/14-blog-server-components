import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

Heyy there! I'm Dennis Ngugi, a 23-year-old Software Engineer and Dev Ops student. When I am not diving into code creating and deploying systems you will find me immersed in the world of cars. My passion for technology and cars seamlessly blend in and rev up my love for the automotive industry.

Cars are more than just machines, they are a fusion of engineering, art and raw emotions and whether it is the thrill of the roar of an engine or a perfectly executed deployment, I am always on the lookout for what's next.

This blog is where my two worlds collide and I will be offering a different perspective on the latest automation technology, engineering marvels, and the joy of driving. You will also find a mix of the latest technology trends and my personal reflections and favorite machines.

Whether I am exploring the parallels of the world of cloud architecture or sharing my thoughts about a certain car, my goal is to deliver great insight and perspective for the tech bros and gearheads (and also get myself a Volkswagen GTI :) )

So join me on this adventure, and let's shift gears and deploy.

Love,

Dennis Ngugi`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Dennis Ngugi",
    openGraph: {
      title: "About Me",
      description: "Learn more about Dennis Ngugi",
      images: [
        signOgImageUrl({
          title: "Dennis Ngugi",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
        <div className="mt-10">
          <img
            src="/images/profile-picture.jpg"
            alt="Dennis Ngugi"
            className="rounded-full w-48 h-48 mx-auto"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;


