import DetailsEvent from "../../components/DetailsEvent/DetailsEvent";
import { Container, IconBack, Link, Title } from "./DetailsPage.styled";
import btnBack from "../../images/icons/arrow-left.svg";

const DetailsPage = () => {
  return (
    <Container>
      <Link to="/">
        <IconBack>
          <use href={btnBack + "#arrow-left"}></use>
        </IconBack>
        Back
      </Link>

      <DetailsEvent />
    </Container>
  );
};

export default DetailsPage;
