import React from 'react';
import './App.css'
import Card from './components/Card'
import LeftPanel from './components/LeftPanel';


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://imgs.search.brave.com/k2-S1pIsJJWeoDgoAUhsAtERnbHDVnxX8Bvunk641Z8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjAv/MzAxLzkyMC9zbWFs/bC9nb29nbGUtbG9n/by1vbi1idXR0b24t/ZnJlZS1wbmcucG5n",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 45, // $ per hour
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/-uyJbEOwnivhVEOZ0J_qqf92ADF3_JMmPW5yUkCFiTU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDQv/NTQyLzY3My9zbWFs/bC9tZXRhdmVyc2Ut/YWxsLWFwcHMtaWNv/bnMtbG9nb3MtZmFj/ZWJvb2staW5zdGFn/cmFtLW1lc3Nlbmdl/ci1wb3J0YWwtZmFj/ZWJvb2stcG9ydGFs/LW9jdWx1cy1mYWNl/Ym9vay1hcHBzLW1l/dGEtYXBwcy1mcm9t/LW1ldGEtZnJvbS1m/YWNlYm9vay1hcHBs/aWNhdGlvbnMtZnJl/ZS12ZWN0b3IuanBn",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 50,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/98dRkyZ1zeADFpvad5k21xmSSuHXk_AS3K8aLxVI7Cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/aWNvbi1ibGFjay1h/bmQtd2hpdGUtdmVj/dG9yLTM0MjQzOTg3/LmpwZw",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 55,
      location: "Chennai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/TeRR1oKtrjc4Tzsh0XpBYIFss1RpRySoesHsqK7gjrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2Q4Lzhm/LzMyL2Q4OGYzMjQz/OTU0Zjc0NGI0YjIx/MmVmOTM1ODFhMTI0/LmpwZw",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 60,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/ooxXqITHt4SVhBVlRBD0fBCKeyKEma7-cgG4eGWmV88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MTkwLzY5OC9zbWFs/bC9uZXRmbGl4LWxv/Z28tbmV0ZmxpeC1p/Y29uLWZyZWUtZnJl/ZS12ZWN0b3IuanBn",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Data Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 65,
      location: "Remote, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/cU13n8Wu61ZfYrYhBzrndNulyMPpE6gXQZmyS9kn4tg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLTQucG5n",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: 48,
      location: "Pune, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/szCkFCBXl8EaFF2KVFqMxd-vp5K1X_TOZGBIjgA_WXo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzQ4NC9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
      companyName: "Tesla",
      datePosted: "6 weeks ago",
      post: "AI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: 70,
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/2If4MOYAd8_l3oDtTIbHioo8ZmSTvvpaWe45F-woKKs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL3RfMjI5/X252aWRpYV9sb2dv/LmpwZw",
      companyName: "NVIDIA",
      datePosted: "8 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 68,
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/ifGAWLasRaIDDWjDlwp3FMWijfSioCMzxA5dFKEAsXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjMvT3Jh/Y2xlLUxvZ28tUE5H/LUZpbGUucG5n",
      companyName: "Oracle",
      datePosted: "2 months ago",
      post: "Database Administrator",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: 40,
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://imgs.search.brave.com/bf1P-vlw8u2JaFLbmyz3EjS4LPeN2LDSuv3vcUlezgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWlibS1pY29uLXN2/Zy1kb3dubG9hZC1w/bmctMjgyMTIwLnBu/Zz9mPXdlYnAmdz0y/NTY",
      companyName: "IBM",
      datePosted: "12 days ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: 52,
      location: "Noida, India"
    }
  ];


  return (
    // <> </> -->empty tags
    <>
      <div className="parent">
        {jobOpenings.map((val,index)=>{
          return <Card key={index} logo={val.brandLogo} company = {val.companyName} date = {val.datePosted} post={val.post} tag1={val.tag1} tag2={val.tag2} pay={val.pay} location={val.location}/>
        })}
      </div>
    </>
  )
}

export default App;