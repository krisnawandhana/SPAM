import { useEffect, useState } from 'react';
import ReactSpeedometer from "react-d3-speedometer";
import supabase from '../../utils/SupabaseClient';
import { Link } from 'react-router-dom';

export default function VoltMeter() {
  const [latestData, setLatestData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('data_pemakaian')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1);

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setLatestData(data[0]); // Data terbaru untuk speedometer
      }
    };

    fetchData();

    // Fetch data setiap 5 detik
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10">
      {/* Speedometer untuk data terbaru */}
      <div className="grid grid-cols-3 gap-6">
        {/* Voltage Meter */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ReactSpeedometer
            maxValue={450}
            value={latestData?.volt || 0}
            valueFormat={"d"}
            customSegmentStops={[0, 112.5, 225, 337.5, 450]}
            segmentColors={["#a3be8c", "#ebcb8b", "#d08770", "#bf616a"]}
            currentValueText={`Voltage: ${latestData?.volt || 0} V`}
            textColor={"black"}
          />
        </div>

        {/* Ampere Meter */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ReactSpeedometer
            maxValue={100}
            value={latestData?.ampere || 0}
            valueFormat={"d"}
            customSegmentStops={[0, 25, 50, 75, 100]}
            segmentColors={["#a3be8c", "#ebcb8b", "#d08770", "#bf616a"]}
            currentValueText={`Ampere: ${latestData?.ampere || 0} A`}
            textColor={"black"}
          />
        </div>

        {/* kWh Meter */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ReactSpeedometer
            maxValue={1000}
            value={latestData?.kWh || 0}
            valueFormat={"d"}
            customSegmentStops={[0, 250, 500, 750, 1000]}
            segmentColors={["#a3be8c", "#ebcb8b", "#d08770", "#bf616a"]}
            currentValueText={`kWh: ${latestData?.kwh || 0} kWh`}
            textColor={"black"}
          />
        </div>
      </div>
      <div className="my-4 text-right">
        <Link 
          to="/logs" 
          className="text-black font-bold text-xl transition-transform duration-300 hover:text-teal-500 flex items-center justify-end gap-2"
        >
          View Logs
          <span className="text-3xl">↦</span>
        </Link>
      </div>
    </div>
  );
}
