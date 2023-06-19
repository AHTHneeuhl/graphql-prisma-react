import { useQuery } from "urql";
import UserDisplay from "./components/UserDisplay";
import { GetUsersDocument } from "./graphql/generated";

const App = () => {
  const [results] = useQuery({
    query: GetUsersDocument,
  });

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {results.data?.users.map((user, idx) => (
        <UserDisplay user={user} key={idx} />
      ))}
    </div>
  );
};

export default App;
