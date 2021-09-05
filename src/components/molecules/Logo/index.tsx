import React from "react";
import * as S from "./style";
import AtthyDuriLogo from "../../../assets/img/Logo.png";
import { Link } from "components";

const Logo = ({ ...props }) => {
  return (
    <Link to="/">
      <S.AtthyDuriLogo src={AtthyDuriLogo} {...props} />
    </Link>
  );
};

export default Logo;
