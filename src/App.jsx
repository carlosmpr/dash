import LineChartComponent from "./components/LineChart";
import Navbar from "./components/Navbar";

import { lineData, lineData2, scatterPlot, pieData , barData, funnelData } from "./components/Data";
import LinearChart from "./components/LinearChart";
import ScatterPlotComponent from "./components/ScatterPlotComponent";
import PieComponent from "./components/PieComponent";
import BarComponents from "./components/BarComponent";
import FunnelCompoenent from "./components/FunnelCompoenent";

function App() {
  return (
    <div className="bg-sky-50 md:pb-20 mb-40">
      <Navbar />
      <div className="w-full  flex  md:pl-20 md:pr-20  md:pt-40 md:pb-20">
        <div
          className="w-full  rounded-md  flex flex-col items-center gap-y-4"
         
        >
          <h1 className="font-bold text-5xl text-center md:text-7xl p-4 ">Welcome to Dash </h1>
          <h1 className="text-xl font-regular text-gray-500 lg:w-1/2 text-center">
         Welcome to Dash, the powerful data visualization solution that enables you to easily create interactive and insightful dashboards for your data.
          </h1>
          <div className="w-full lg:w-11/12 max-w-5xl h-64 md:h-96 bg-white rounded-lg md:shadow-2xl">
            <LineChartComponent data={lineData} />
          </div>
          <div className="space-y-8 lg:flex  lg:gap-x-8 w-full items-center justify-center">
            <div
              className="lg:w-1/2 max-w-2xl  p-5 bg-white rounded-lg md:shadow-2xl"
              style={{ height: "300px" }}
            >
              <LinearChart data={lineData2} />
            </div>

            <div
              className="lg:w-1/2  max-w-2xl  h-1/2 p-5 bg-white rounded-lg md:shadow-2xl"
              style={{ height: "300px" }}
            >
              <ScatterPlotComponent data={scatterPlot} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white  md:p-20 mt-12">
        <div className="flex flex-col-reverse lg:flex-row w-full items-center lg:gap-x-8  md:gap-y-8">
          <div
            className="w-full lg:w-1/2  h-full bg-white rounded-lg md:shadow-2xl "
            style={{ height: "500px" }}
          >
            <PieComponent data={pieData} />
          </div>
          <div className="p-4 space-y-4 flex-1 font-light  max-w-3xl">
            <h3 className="font-bold text-4xl  ">Intuitive</h3>
            <p className="leading-9 text-xl">
            With our intuitive drag-and-drop interface and extensive library of charts, graphs, and other visualizations, you can create beautiful and informative dashboards in minutes.
            </p>

           
          </div>
        </div>
      </div>

      <div className="w-full   md:p-20 mt-12">
      <div className="flex flex-col lg:flex-row w-full items-center lg:gap-x-8  md:gap-y-8">
         
          <div className="p-4 space-y-4 flex-1 font-light  ">
            <h3 className="font-bold text-4xl  ">Real Time</h3>
            <p className="leading-9 text-xl">
            Dash also offers powerful features like real-time updates, interactive filtering, and custom styling, giving you complete control over the look and functionality of your dashboard. And with our robust APIs and integrations, you can easily connect your data application to a wide range of data sources and external services.
            </p>

          
          </div>

          <div
            className="w-full lg:w-1/2 h-full bg-white rounded-lg md:shadow-2xl "
            style={{ height: "500px" }}
          >
           <BarComponents data={barData}/>
          </div>
        </div>
      </div>



      <div className="w-full bg-white  md:p-20">
      <div className="flex flex-col-reverse lg:flex-row w-full items-center lg:gap-x-8  md:gap-y-8">
          <div
            className="w-full h-64 md:h-96 lg:w-1/2 max-w-3xl h-full bg-white rounded-lg md:shadow-2xl "
           
          >
            <FunnelCompoenent data={funnelData} />
          </div>
          <div className="p-4 space-y-4 flex-1 font-light  max-w-3xl">
            <h3 className="font-bold text-4xl  ">Transform </h3>
          

            <p className="leading-9 text-xl">
            Easily transform your Excel sheet into a powerful web-based dashboard that you can share with others.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex flex-col items-center justify-center md:p-20  mt-12 space-y-8">
        <h3 className="text-3xl text-center md:text-5xl font-bold">Build your customize dashboard</h3>
        <p className="leading-9 text-xl text-center w-1/2 font-light">So whether you're looking to explore and analyze your data in new ways, build powerful data-driven applications, or communicate insights to your team and stakeholders, Dash has everything you need to succeed.</p>
        <img src="/images/Main.png" alt={"dashboard"} className="w-full"/>

      </div>
    </div>
  );
}

export default App;
