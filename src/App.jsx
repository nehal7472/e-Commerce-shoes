import Header from "./components/Header";
import ListSection from "./components/ListSection";
import Products from "./components/Products";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="sectionPadding mx-auto">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 px-4">
        <div className="w-full max-w-md mx-auto lg:mx-0 lg:col-span-1">
          <ListSection />
        </div>
        <div className="w-full max-w-5xl mx-auto lg:mx-0 lg:col-span-3">
          <Products />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
