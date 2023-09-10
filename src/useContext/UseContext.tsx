import { AgenstDetail, ChildrenProps, TplanDetail } from "@/schemas";
import useLocalStorage from "@/utils/useLocalstorage";
import React, { createContext, useContext } from "react";

type FormsDetails = {
  agentdetail?: AgenstDetail;
  plan?: TplanDetail;
};

type ContextForm = {
  data: FormsDetails;
  setData: React.Dispatch<React.SetStateAction<FormsDetails>>;
};

const DetailsContext = createContext<ContextForm>({
  data: {},
  setData: () => {},
});

const UseContext: React.FC<ChildrenProps> = ({ children }) => {
  const [data, setData] = useLocalStorage("details", {});

  console.log(data);

  return (
    <DetailsContext.Provider value={{ data, setData }}>
      {children}
    </DetailsContext.Provider>
  );
};

export default UseContext;

export const UseContextForm = () => useContext(DetailsContext);
