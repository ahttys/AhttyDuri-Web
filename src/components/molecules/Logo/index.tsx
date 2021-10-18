import * as S from "./style";
import AhttyDuriLogo from "../../../assets/img/Logo.png";
import { Link } from "components";

const Logo = ({ ...props }) => {
  return (
    <Link to="/">
      <S.AtthyDuriLogo src={AhttyDuriLogo} {...props} />
    </Link>
  );
};

export default Logo;
