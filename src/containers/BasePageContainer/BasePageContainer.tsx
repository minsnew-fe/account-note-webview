import { PropsWithChildren } from "react";
import BottomNavigator from "../../components/BottomNavigator/BottomNavigator";

const BasePageContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-1 justify-center align-middle max-w-[640px]">
      {children}
      <BottomNavigator />
    </div>
  );
};

export default BasePageContainer;
