import { Navigate, Route, Routes } from "react-router-dom";

import UpdatePlace from "./components/update-place/update-place";
import Header from "./routes/header/header";
import NewPlace from "./routes/new-place/new-place";
import UserPlace from "./routes/user-place/user-place";
import User from "./routes/user/user";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<User />} />
				<Route path="/:userId/places" element={<UserPlace />} />
				<Route path="/places/new" element={<NewPlace />} />
				<Route path="/places/:placeId" element={<UpdatePlace />} />
			</Route>
			{/* Here Navigate hook is used to Redirect any invalid url route to the homepage */}
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default App;
