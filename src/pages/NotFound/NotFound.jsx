import {
  NotFoundSection,
  H1,
  H2,
  H3,
  Text,
  Links,
  Image,
} from "./NotFound.styled";
const NotFound = () => {
  return (
    <div>
      <NotFoundSection>
        <div>
          <Image
            src="https://assets.codepen.io/5647096/backToTheHomepage.png"
            alt="Back to the Homepage"
          />
          <Image
            src="https://assets.codepen.io/5647096/Delorean.png"
            alt="El Delorean, El Doc y Marti McFly"
          />
        </div>
        <Text>
          <H1>404</H1>
          <H2>PAGE NOT FOUND</H2>
          <H3>BACK TO HOME?</H3>
          <Links to="/">YES</Links>
        </Text>
      </NotFoundSection>
    </div>
  );
};
export default NotFound;
