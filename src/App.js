import Button from "./Button";
import Header from "./Header";
import Person from "./Person";
import List from "./List";
function App() {
  return (
 <>
 {/* THIRD question solution */}
<Header title="Welcome to my first react website"/>
 {/* First question solution  */}
 <Person name='Bishal' age='19'/>
 {/* second question solution */}
 <Button value="Click here 👇"/>
 {/* Fourth question solution  */}
 <List items={['Apple','banana','carrot']}/>
 </>
  )
}

export default App;
