import { gql,useQuery } from "@apollo/client";

const QIERY=gql`
          query{
            authors{name}
          }
`;

function App() {
  const {loading , data}=useQuery(QIERY);
  console.log({data});
  return (
    <div>
     app
    </div>
  );
}

export default App;
