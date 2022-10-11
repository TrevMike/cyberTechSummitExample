import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

const Introduction = lazy(() => import("./components/Introduction"));
const EmailExample = lazy(() => import("./components/EmailExample"));
const NavBar = lazy(() => import("./components/NavBar"));
const Footer = lazy(() => import("./components/Footer"));
const EmailSample1 = lazy(() =>
  import("./components/emailSamples/EmailSample1")
);
const EmailSample2 = lazy(() =>
  import("./components/emailSamples/EmailSample2")
);
const EmailSample3 = lazy(() =>
  import("./components/emailSamples/EmailSample3")
);
const EmailSample4 = lazy(() =>
  import("./components/emailSamples/EmailSample4")
);
function App() {
  return (
    <div className="App">
      {/* <EmailExample /> */}
      <Suspense fallback={<p>Loading</p>}>
        <NavBar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Introduction />} />
            <Route path="/email-samples" element={<EmailExample />} />
            <Route path="/email-sample-one" element={<EmailSample1 />} />
            <Route path="/email-sample-two" element={<EmailSample2 />} />
            <Route path="/email-sample-three" element={<EmailSample3 />} />
            <Route path="/email-sample-four" element={<EmailSample4 />} />
          </Routes>
        </Router>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
