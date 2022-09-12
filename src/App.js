import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import DropDown from "./components/DropDown/DropDown";
import FeatureImportancesChart from "./components/shared/FeatureImportancesChart/FeatureImportancesChart";
import PredictionsPlot from "./components/shared/PredictionsPlot/PredictionsPlot";
import Row from "./components/shared/Row.styled";
import ModelDetails from "./components/shared/Tables/ModelDetails/ModelDetails";

function App() {
  return (
    <div className="App">
      <TopBar />
      <DropDown />
      <Row>
        <PredictionsPlot />
        <FeatureImportancesChart />
      </Row>
      <Row>
        <ModelDetails />
        <ModelDetails />
        <ModelDetails />
      </Row>
    </div>
  );
}

export default App;
