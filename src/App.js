import logo from './logo.svg';
import './App.css';
import Game from './components/memorable_game/Game';
import Quiz from './components/quize_components/Quiz';
import AddTodo from './components/todo_list/AddTodo';
import UserList from './components/user_list.js/UserList';
import QR_Code from './components/qr_code/QR_Code';
import Jobs from './components/job_listing/Jobs';
import Query from './components/dictionary/Query';
import EventCalender from './components/event_calender/EventCalender';
import GroceryLIst from './components/grocery_list/GroceryLIst';
import ActivityList from './components/activity_list/ActivityList';
import UserStatus from './components/user_status_change/UserStatus';
import MainTasks from './components/list_tasks_subtasks/MainTasks';
import TextList from './components/text_listing_ellipses/TextList';
import MergeTree from './components/merg_divide_seq/MergeTree';
import Capcha from './components/capcha_test/Capcha';
import Player from './components/team_players/Player';
import Follower from './components/followers_list/Follower';
import TicTacToeGame from './components/Tic-Tac-Toe/TicTacToeGame';
import FileUpload from './components/file_upload/FileUpload';
import RegistrationForm from './components/registrationform/RegistrationForm';

function App() {
  return (
    <div className="App">
     <div className='App-header'>

      {/* <RegistrationForm/> */}
      {/* <FileUpload/> */}
      {/* <Follower/> */}
      {/* <Player/> */}
      {/* <Capcha/> */}

        {/* <MergeTree/> */}
      {/* <TextList /> */}
      {/* <MainTasks/> */}
      {/* <UserStatus/> */}
      {/* <ActivityList/> */}
      {/* <GroceryLIst/> */}
      {/* <EventCalender/> */}
      {/* <TicTacToeGame/> */}
      {/* <Query/> */}
      {/* <Jobs/> */}
      {/* <QR_Code/> */}
      {/* <UserList/> */}
      {/* <AddTodo/> */}
     {/* <Game/> */}
      <Quiz/>
      </div> 
    </div>
  );
}

export default App;
