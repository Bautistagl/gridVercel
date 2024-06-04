import React, { useEffect, useState } from 'react';
import DeployOption from './DeployOption';
import axios from 'axios';

const DeployChoice = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.cloudmos.io/v1/dashboard-data'
        );
        const rawData = response.data.networkCapacity;

        // Convert bytes to terabytes and format the numbers
        const formattedData = {
          activeProviderCount: rawData.activeProviderCount,
          activeCPU: formatNumberWithK(rawData.totalCPU),
          activeMemory: (rawData.totalMemory / 1024 ** 4).toFixed(2), // Convert bytes to TB
          activeStorage: (rawData.totalStorage / 1024 ** 4).toFixed(2), // Convert bytes to TB
        };

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // const handleScroll = () => {
    //   const leftCard = document.querySelector('.scroll-in-left');
    //   const rightCard = document.querySelector('.scroll-in-right');
    //   const triggerBottom = (window.innerHeight / 5) * 4;

    //   if (leftCard.getBoundingClientRect().top < triggerBottom) {
    //     leftCard.classList.add('visible');
    //   }

    //   if (rightCard.getBoundingClientRect().top < triggerBottom) {
    //     rightCard.classList.add('visible');
    //   }
    // };

    // window.addEventListener('scroll', handleScroll);

    // // Cleanup event listener on component unmount
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const formatNumberWithK = (number) => {
    return number >= 1000
      ? (number / 1000000).toFixed(2) + 'K'
      : number.toString();
  };

  if (!data) {
    return <div>Loading...</div>; // Muestra un indicador de carga mientras se obtienen los datos
  }

  return (
    <div className="deploy-choice">
      <h1>Deploy on the cloud of your choice</h1>
      <span>Access computing with the best providers</span>
      <div style={{ display: 'flex' }}>
        <DeployOption
          className="scroll-in-left"
          image="/fluxLanding.svg"
          title="The largest decentralized computing network"
          text="Discover the freedom of managing a cloud without the need of expertise or DevOps. Even if you're unfamiliar with new decentralized technologies, we make hosting stress-free and accessible for everyone, offering a straightforward and dependable experience in the realm of decentralization."
          data={data}
        />
        <DeployOption
          className="scroll-in-right"
          image="/akashLanding.svg"
          title="Supercloud"
          text="Discover the freedom of managing a cloud without the need of expertise or DevOps. Even if you're unfamiliar with new decentralized technologies, we make hosting stress-free and accessible for everyone, offering a straightforward and dependable experience in the realm of decentralization."
          data={data}
        />
      </div>
    </div>
  );
};

export default DeployChoice;
