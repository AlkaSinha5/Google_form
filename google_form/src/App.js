import './App.css';
import CheckboxForm from './component/CheckboxForm';
import DropdownForm from './component/DropdownForm';
import FileUploadForm from './component/FileUploadForm';
import Mcq from './component/Mcq';
import ParaGraph from './component/ParaGraph';
import ShortAnswerForm from './component/ShortAnswerForm';
import AssignemtTask from './component/AssignmentTask'
import LinearScaleForm from './component/LinearScaleForm';
import MultiChoiceGrid from './component/MultiChoiceGrid';
import TickboxGrid from './component/TickboxGrid';

function App() {
  return (
    <div className="App">
      <form>
      <AssignemtTask/>
      <Mcq/>
      <CheckboxForm/>
      <ShortAnswerForm />
      <ParaGraph/>
      <DropdownForm/>
      <FileUploadForm/>
      <LinearScaleForm/>
      <MultiChoiceGrid/>
      <TickboxGrid/>
      <button className='color'>Submit</button>
      </form>
    </div>
  );
}

export default App;
