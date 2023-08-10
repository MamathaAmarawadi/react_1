import UserProfile from './components/UserProfile/index'

import './App.css'

const userDetailsList = [
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'mamatha',
    role: 'Software developer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'mamatha',
    role: 'Software developer',
  },
  {
    imageURL: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'mamatha',
    role: 'Software developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">UserList</h1>
    <ul>
      <UserProfile userDetails={userDetailsList[0]} />
      <UserProfile userDetails={userDetailsList[1]} />
      <UserProfile userDetails={userDetailsList[2]} />
    </ul>
  </div>
)
export default App
