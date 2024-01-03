import Avatar from "./../components/Avatar";
import photo from "../../public/fabrice.png";
import Container from "./../components/Container";

export default function Home() {
  return (
    <div className="w-full min-h-[90vh] dark:bg-gray-900 bg-gray-50">
      <div className="flex flex-col items-center justify-center w-full">
        <Container>
          <Avatar image={photo} />
          <h1 className="text-5xl font-bold text-center text-gray-800 dark:text-white">
            Hello World
          </h1>
          <p className="py-5 text-xl text-gray-800 text-start dark:text-white">
            I am a software developer located on the beautiful Island of
            Mauritius. I am passionate about building applications that are
            scalable and easy to maintain.
          </p>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            My Stacks
          </h2>
          <p className="py-5 text-xl text-gray-800 text-start dark:text-white">
            I am a full stack developer with a preference for the backend. I
            have experience working with the following technologies:
          </p>
          <div className="flex justify-around my-8 bg-gray-200/[0.5] py-5 px-15 rounded-md">
            <img src="/next.svg" alt="nextJs" className="w-32 p-2" />
            <img src="/ror.svg" alt="Ruby on Rails" className="w-32 h-16 p-2" />
            <img src="/ruby.svg" alt="ruby" className="w-16 h-16 p-2" />
            <img
              src="/heroku.png"
              alt="heroku"
              className="w-16 h-16 p-2 bg-[#664986]"
            />
            <img src="/clojure.png" alt="heroku" className="w-16 h-16 p-2" />
          </div>

          <p className="text-xl text-gray-800 text-start dark:text-white">
            This is my personal website. After travelling the world and trying
            out tonnes of new skills and jobs, I decided in 2018 to get back to
            what I love the most, the IT world. This is the site that showcase
            my journey that started 3 years ago when I decided to consolidate my
            knowledge of coding and out of the blue do Le Wagon bootcamp and
            build myself a new stable life doing what I love the most.
          </p>
        </Container>
      </div>
    </div>
  );
}
