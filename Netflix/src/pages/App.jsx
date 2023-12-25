import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Body from './Body';

import Login from './Login';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login />
          }
        />
        <Route
          path="/main"
          element={
             <Body />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
