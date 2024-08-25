import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

![Samantha](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/clvlugru90000o4g8ahxp069s/db7abbe3-aa5c-433e-a16d-cbf137d1c9e5.png/public)

Hey there! I'm Dennis Ngugi, a 23-year-old Sotfware Engineer and Dev Ops student. When  I am not diving into code creating and deploying systems you will find me immersed in the world of cars. My passion for technology and cars seemlesly blend in and rev up my love for the automotive industry.

Cars are more than just machines, they are a fusion of engineering, art and raw emotions and whether it is the thrill of the roar of an engine or a perfectly executed deployment, I am always on the lookout for what's next.


This blog is where my two worlds collide and I will be offering a different perspective in the latest automation technology, enginnering marvels and the joy of driving. You will also find a mix of the latest technology trends and my personal reflections and favorite machines. 

Whether I am exploring the parrallels of the world of cloud architecture or sharing my thoughts about a certain car, my goal is to deliver great insight and perspective for the tech bros and gear heads(and also get myselt a Volkwagen GTI :)

So join me on this adventure, and let's drive and deploy.

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
      </div>
      <Footer />
    </div>
  );
};

export default Page;
