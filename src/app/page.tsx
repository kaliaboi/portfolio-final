import WorkCard from "@/components/WorkCard";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="w-full flex justify-center bg-zinc-50">
      <main className="p-5 h-full max-w-5xl">
        <div className="header lg:mt-12">
          <Text>Abhishek Kalia</Text>
          <Text>Product Designer & Frontend Developer</Text>
          <Text>New York City</Text>
        </div>

        <div className="work mt-20">
          <Title>Selected Work</Title>
          <div className="work-cards mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {projects.map((project, key) => (
              <WorkCard project={project} key={key} />
            ))}
          </div>
        </div>

        <div className="about mt-96">
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, eum?
            Minus hic laborum doloribus quidem voluptates libero, doloremque
            exercitationem amet! Perspiciatis esse odio labore ea facilis
            voluptatem molestias corrupti dolor.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, eum?
            Minus hic laborum doloribus quidem voluptates libero, doloremque
            exercitationem amet! Perspiciatis esse odio labore ea facilis
            voluptatem molestias corrupti dolor.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, eum?
            Minus hic laborum doloribus quidem voluptates libero, doloremque
            exercitationem amet! Perspiciatis esse odio labore ea facilis
            voluptatem molestias corrupti dolor.
          </Text>
        </div>
      </main>
    </div>
  );
}
