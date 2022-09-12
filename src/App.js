import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import DropDown from "./components/DropDown/DropDown";
import FeatureImportancesChart from "./components/shared/FeatureImportancesChart/FeatureImportancesChart";
import PredictionsPlot from "./components/shared/PredictionsPlot/PredictionsPlot";
import Row from "./components/shared/Row.styled";
import ModelDetails from "./components/shared/Tables/ModelDetails/ModelDetails";
import { useEffect, useState } from "react";
import axios from "axios";

const SERIES_URL = "http://localhost:3001/series";
const SERIES_DATA_URL = (series) => `http://localhost:3001/data/${series}`;
const RESULTS_FOR_SERIES_URL = (series) =>
  `http://localhost:3001/results/${series}`;

function App() {
  // Consts
  const [series, setSeries] = useState({ list: [], fetching: false });
  const [selectedSeries, setSelectedSeries] = useState({
    item: null,
    index: -1,
    data: {
      fetching: false,
      list: [],
    },
    results: {
      fetching: false,
      list: [],
    },
  });

  // Effects
  useEffect(() => {
    fetchSeries();
  }, []);

  // Methods

  // API Fetching Methods
  async function fetchSeries() {
    setSeries({ fetching: true, list: [] });

    const { data: series } = await axios.get(SERIES_URL).catch(console.error);
    if (!series) return console.error("Failed to fetch series");

    console.log("series:", series);

    setSeries({ fetching: false, list: series });
  }

  async function fetchDataForSeries({ item, index }) {
    // Validation if we have a series selected
    if (!item) return;

    setSelectedSeries((prevSeries) => {
      return {
        ...prevSeries,
        item: item,
        index: index,
        data: {
          fetching: true,
          list: [],
        },
      };
    });

    const { data } = await axios
      .get(SERIES_DATA_URL(item))
      .catch(console.error);
    if (!series) return console.error("Failed to fetch series data");

    console.log("data for series:", data);

    // setSeries({ fetching: false, list: series });
    setSelectedSeries((prevSeries) => {
      return {
        ...prevSeries,
        item: item,
        index: index,
        data: {
          fetching: false,
          list: data,
        },
      };
    });
  }

  async function fetchReultsForSeries({ item }) {
    // Validation if we have a series selected
    if (!item) return;

    setSelectedSeries((prevSeries) => {
      return {
        ...prevSeries,
        results: {
          fetching: true,
          list: [],
        },
      };
    });

    const { data } = await axios
      .get(RESULTS_FOR_SERIES_URL(item))
      .catch(console.error);
    if (!series) return console.error("Failed to fetch results series data");

    console.log("results data for series:", data);

    // setSeries({ fetching: false, list: series });
    setSelectedSeries((prevSeries) => {
      return {
        ...prevSeries,
        results: {
          fetching: false,
          list: data,
        },
      };
    });
  }

  // General Event Methods

  async function onDropdownSelect({ item, index }) {
    console.log("select", item, index);

    await Promise.all([
      fetchDataForSeries({ item, index }),
      fetchReultsForSeries({ item }),
    ]).catch(console.error);
  }

  return (
    <div className="App">
      <TopBar />
      <DropDown onSelect={onDropdownSelect} series={series} />
      {!selectedSeries.data.fetching && !selectedSeries.results.fetching ? (
        <>
          <Row>
            <PredictionsPlot
              data={{
                data: selectedSeries.data.list,
                results: selectedSeries.results.list,
              }}
            />
            <FeatureImportancesChart
              data={{
                results: selectedSeries.results.list,
              }}
            />
          </Row>
          <Row>
            {/* Commented as they were breaking the app due to some data being undefined */}
            {/* <ModelDetails
              title="Model Details"
              headers={["Property", "Value"]}
              data={selectedSeries.results.list.modelSummary || null}
            /> */}
            {/* <ModelDetails
              title="Model Details"
              headers={["Property", "Value"]}
              data={{ results: selectedSeries.results.list["scoring_metrics"] }}
            />
            <ModelDetails
              title="Confusion Metric"
              headers={["", "Property", "Value"]}
              data={{ results: selectedSeries.results.list.confusionMetric }}
            /> */}
          </Row>
        </>
      ) : (
        <Row>Fetching....</Row>
      )}
    </div>
  );
}

export default App;
