import { Provider } from "react-redux";
import { store } from "./store/index.js";
import AppRoutes from "./routes/index.jsx";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
