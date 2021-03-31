import { AuthProvider } from "./contexts";
import { AuthRoute } from './screens';

const App = () => {

    return (
        <AuthProvider>
            <AuthRoute />
        </AuthProvider>
    )
};

export default App;
