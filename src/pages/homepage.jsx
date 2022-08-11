import React, { useEffect } from 'react';
import Header from '../components/Layout/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';
import Layout from './../components/Layout/layout';

const Homepage = () => {
  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <Layout>
      <div className="bg=gray-background">
        <div className="grid">
          <p>This is a test</p>
          <Timeline />
          <Sidebar />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
