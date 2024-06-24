import React, { useEffect, useState } from 'react';
import DeployOption from './DeployOption';

const DeployChoice = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nodes, setNodes] = useState(null);

  const fetchFlux = async () => {
    const response = await fetch(
      'https://stats.runonflux.io/fluxinfo?projection=benchmark'
    );
    const data = await response.json();

    let totalSsd = 0,
      totalRam = 0,
      totalStorage = 0;

    data.data.forEach((item) => {
      const bench = item.benchmark.bench;
      totalSsd += bench.ssd;
      totalRam += bench.ram;
      totalStorage += bench.cores;
    });

    // Convert MB to TB
    totalSsd = totalSsd / 1024;
    totalRam = totalRam / 1024;

    return {
      totalSsd,
      totalRam,
      totalStorage,
    };
  };

  const fetchNodes = async () => {
    const response = await fetch(
      'https://api.runonflux.io/daemon/getfluxnodecount'
    );
    const data = await response.json();

    return {
      totalNodes: data.data.total,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [fluxData, nodesData] = await Promise.all([
          fetchFlux(),
          fetchNodes(),
        ]);
        setData(fluxData);
        setNodes(nodesData);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data || !nodes) {
    return <div>Loading...</div>; // Muestra un indicador de carga mientras se obtienen los datos
  }

  return (
    <div className="deploy-choice">
      <h1>Deploy on the cloud of your choice</h1>
      <span>Access computing with the best providers</span>
      <DeployOption
        image="/fluxLanding.svg"
        title="The largest decentralized computing network"
        text="Discover the freedom of managing a cloud without the need of expertise or DevOps. Even if you're unfamiliar with new decentralized technologies, we make hosting stress-free and accessible for everyone, offering a straightforward and dependable experience in the realm of decentralization."
        data={data}
        nodes={nodes}
      />
      <button className="button-landing-4">DEPLOY NOW</button>
    </div>
  );
};

export default DeployChoice;
