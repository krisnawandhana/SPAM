import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../utils/SupabaseClient';
import { calculateEfficiency } from '../utils/fuzzyLogic'; // Import fuzzy logic

export default function Logs() {
  const [dataLog, setDataLog] = useState([]);
  const [manualInput, setManualInput] = useState({ volt: '', ampere: '', kwh: '' });
  const [manualEfficiency, setManualEfficiency] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('data_pemakaian')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(25);

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setDataLog(data);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleManualInputChange = (e) => {
    const { name, value } = e.target;
    setManualInput({ ...manualInput, [name]: value });
  };

  const handleManualSubmit = () => {
    const { volt, ampere, kwh } = manualInput;
    if (volt && ampere && kwh) {
      const efficiency = calculateEfficiency(parseFloat(volt), parseFloat(ampere), parseFloat(kwh));
      setManualEfficiency(efficiency);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
        <span className="text-black font-bold text-4xl transition-transform duration-300 hover:scale-105 hover:text-teal-500">
          <Link to="/">↤</Link>
        </span>
        Monitoring Logs
      </h2>

      {/* Manual Input for Testing Fuzzy Logic */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Manual Input for Fuzzy Logic Testing</h3>
        <div className="flex gap-4 mb-4">
          <input
            type="number"
            name="volt"
            placeholder="Volt"
            value={manualInput.volt}
            onChange={handleManualInputChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="ampere"
            placeholder="Ampere"
            value={manualInput.ampere}
            onChange={handleManualInputChange}
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="kwh"
            placeholder="kWh"
            value={manualInput.kwh}
            onChange={handleManualInputChange}
            className="border p-2 rounded"
          />
          <button
            onClick={handleManualSubmit}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
          >
            Calculate
          </button>
        </div>
        {manualEfficiency !== null && (
          <p className="text-center font-bold" style={{ color: manualEfficiency > 70 ? 'green' : manualEfficiency > 50 ? 'orange' : 'red' }}>
            Efficiency: {manualEfficiency.toFixed(2)}%
          </p>
        )}
      </div>

      {/* Logs Table */}
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Volt</th>
            <th className="border border-gray-300 px-4 py-2">Ampere</th>
            <th className="border border-gray-300 px-4 py-2">kWh</th>
            <th className="border border-gray-300 px-4 py-2">Efisiensi</th>
            <th className="border border-gray-300 px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {dataLog.map((row) => {
            const efficiency = calculateEfficiency(row.volt, row.ampere, row.kwh);
            return (
              <tr key={row.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{row.id}</td>
                <td className="border border-gray-300 px-4 py-2">{row.volt} V</td>
                <td className="border border-gray-300 px-4 py-2">{row.ampere} A</td>
                <td className="border border-gray-300 px-4 py-2">{row.kwh} kWh</td>
                <td className="border border-gray-300 px-4 py-2 font-bold text-center"
                    style={{ color: efficiency > 70 ? 'green' : efficiency > 50 ? 'orange' : 'red' }}>
                  {efficiency.toFixed(2)}%
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(row.created_at).toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
