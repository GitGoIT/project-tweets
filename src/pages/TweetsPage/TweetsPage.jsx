import css from "./TweetsPage.module.css";
import Tweets from "../../components/Tweets/Tweets"

const TweetsPage = () => {
  return (
    <section className={css.section}>
      <Tweets />
    </section>
  );
};
export default TweetsPage;

