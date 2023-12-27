import Avatar from "./../components/Avatar";
import photo from "../../public/avatar.jpeg";
import Container from "./../components/Container";

export default function Home() {
  return (
    <div className="w-full min-h-screen dark:bg-gray-900 bg-gray-50">
      <div className="flex flex-col items-center justify-center w-full">
        <Container>
          <Avatar image={photo} />
          <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white">
            Hello World
          </h1>
          <p className="py-5 text-xl text-center text-gray-800 dark:text-white">
            I am a software developer located on the beautiful Island of
            Mauritius. I am passionate about building applications that are
            scalable and easy to maintain.
          </p>
          <p className="text-xl text-center text-gray-800 dark:text-white">
            This is my personal website. After travelling the world and trying
            out tonnes of new skills and jobs, I decided in 2018 to get back
            to what I love the most, the IT world. This is the site that showcase my journey
            that started 3 years ago when I decided to consolidate my knowledge of coding
            and out of the blue do Le Wagon bootcamp and build myself a new
            stable life doing what I love the most.
          </p>
        </Container>
      </div>
    </div>
  );
}
