import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthPorvider";

const PrivateRoute = ({ redirect, component }) => {
  const authConsumer = useContext(AuthContext);
  const { token } = authConsumer;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate(redirect);
  });

  return component;
};
// cuando esta autorizado el usuario retorno al componente
export default PrivateRoute;
