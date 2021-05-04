import './App.css';
import Jobs from './Jobs';
import './App.css';
import { useEffect, useState } from 'react';
const JOB_API_URL = 'http://localhost:3001/jobs';
// const mockJobs = [
//   { title: 'SWE1', company: 'Google' },
//   { title: 'SWE2', company: 'Facebook' },
//   { title: 'SWE3', company: 'Apple' },
// ];
async function fetchJobs(setJobsList) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();
  setJobsList(json);
  console.log({ json });
}
function App() {
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    fetchJobs(setJobsList);
  }, []);

  return (
    <div className='App'>
      <Jobs jobs={jobsList} />
    </div>
  );
}

export default App;
