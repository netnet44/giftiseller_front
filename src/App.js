import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame16 from "./pages/main";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Frame8 from "./pages/Frame8";
import Frame9 from "./pages/Frame9";
import Frame10 from "./pages/Frame10";
import Frame11 from "./pages/Frame11";
import Default from "./pages/Default";
import Default1 from "./pages/Default1";
import Frame12 from "./pages/Frame12";
import Frame13 from "./pages/Frame13";
import Frame14 from "./pages/Frame14";
import Frame15 from "./pages/Frame15";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/product-detail":
        title = "";
        metaDescription = "";
        break;
      case "/gift-product-detail":
        title = "";
        metaDescription = "";
        break;
      case "/message":
        title = "";
        metaDescription = "";
        break;
      case "/order-detail":
        title = "";
        metaDescription = "";
        break;
      case "/orderlist":
        title = "";
        metaDescription = "";
        break;
      case "/basket":
        title = "";
        metaDescription = "";
        break;
      case "/mypage-edti":
        title = "";
        metaDescription = "";
        break;
      case "/mypage":
        title = "";
        metaDescription = "";
        break;
      case "/notice":
        title = "";
        metaDescription = "";
        break;
      case "/qna":
        title = "";
        metaDescription = "";
        break;
      case "/signup-result":
        title = "";
        metaDescription = "";
        break;
      case "/2default":
        title = "";
        metaDescription = "";
        break;
      case "/signup2":
        title = "";
        metaDescription = "";
        break;
      case "/signup1":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/gift-duedate":
        title = "";
        metaDescription = "";
        break;
      case "/brand":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame16 />} />
      <Route path="/" element={<Frame />} />
      <Route path="/product-detail" element={<Frame1 />} />
      <Route path="/gift-product-detail" element={<Frame2 />} />
      <Route path="/message" element={<Frame3 />} />
      <Route path="/order-detail" element={<Frame4 />} />
      <Route path="/orderlist" element={<Frame5 />} />
      <Route path="/basket" element={<Frame6 />} />
      <Route path="/mypage-edti" element={<Frame7 />} />
      <Route path="/mypage" element={<Frame8 />} />
      <Route path="/notice" element={<Frame9 />} />
      <Route path="/qna" element={<Frame10 />} />
      <Route path="/signup-result" element={<Frame11 />} />
      <Route path="/2default" element={<Default />} />
      <Route path="/signup2" element={<Default1 />} />
      <Route path="/signup1" element={<Frame12 />} />
      <Route path="/login" element={<Frame13 />} />
      <Route path="/gift-duedate" element={<Frame14 />} />
      <Route path="/brand" element={<Frame15 />} />
    </Routes>
  );
}
export default App;
