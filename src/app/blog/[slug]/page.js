import Card from "../../../components/Card";
import Container from "../../../components/Container";
import { getonePostData } from "../../../lib/posts";
import markdownToHtml from "../../../lib/markdownToHtml";

const Page = async ({ params }) => {
  const { slug } = params;
  const postData = getonePostData(slug);
  const { title, date, image, content } = postData;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const renderedHTML = await markdownToHtml(content);

  return (
    <div className="w-full min-h-screen dark:bg-gray-900 bg-gray-50">
      <div className="flex flex-col items-center justify-center w-full">
        <Container>
          <div className="flex flex-col items-center justify-center max-w-full">
            <img
              className="object-cover w-[90%] max-h-[70vh] md:h-full md:w-[85%]"
              src={image}
              alt={`${title}`}
            />
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {title}
            </h1>
            <div
              className="font-light leading-10 text-gray-800 blog-text dark:text-white"
              dangerouslySetInnerHTML={{ __html: renderedHTML }}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Page;
