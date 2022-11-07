import {render} from "react-dom";
import App from "./App";
import {StoreProvider} from "providers/StoreProvider/StoreProvider";

render(
    <StoreProvider>
         <App/>
    </StoreProvider>,
    document.getElementById('root'),
);
