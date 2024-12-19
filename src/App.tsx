import { PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { toggleDirection } from "@/store/themeConfigSlice";

function App({ children }: PropsWithChildren) {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleDirection(themeConfig.direction));
  }, [dispatch, themeConfig.direction]);

  return <div className={`App ${themeConfig.theme}`}>{children}</div>;
}

export default App;
