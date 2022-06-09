import { Components, useEffect, useState } from 'react';
import Home from './containers/Home';
import Loading from './containers/Loading';

 const HomeWithLoading = Loading(Home);

function App(props) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([ ])

    const orgData =[
        {id:6543, name:"Bansi Ghetiya"},
        {id:6320, name:"Mitali Tagadiya"},
        {id:6318, name:"Rutvi Kapuriya"}
    ]
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false); setData(orgData)}, 2000)
    },[])
    return(
      <HomeWithLoading
        isLoading = {loading}
        data = {data}
      />
    )
}


// class App extends Components {
//   render() {
//     return (
//       <div>

        
//       </div>
//     );
//   }
// }



export default App;