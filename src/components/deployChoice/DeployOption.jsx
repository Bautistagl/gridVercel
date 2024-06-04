import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';

const DeployOption = ({ image, title, text, className, data }) => {
  return (
    <div className={`deploy-option ${className}`}>
      <Image alt="" src={image} width={350} height={200} />
      <h2>{title}</h2>
      <span>{text}</span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="deploy-data">
          <h4>Total Nodes</h4>
          <p className="countup-large">
            <CountUp
              start={0}
              end={data.activeProviderCount}
              duration={2.5}
              style={{ fontSize: '36px' }}
            />
          </p>
        </div>
        <div className="deploy-data">
          <h4>Total RAM</h4>
          <p className="countup-large">
            <CountUp
              style={{ fontSize: '36px' }}
              start={0}
              end={data.activeMemory}
              duration={2.5}
            />{' '}
            TB
          </p>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="deploy-data">
          <h4>Total Cores</h4>
          <p className="countup-large">
            <CountUp
              style={{ fontSize: '36px' }}
              start={0}
              end={data.activeCPU}
              duration={2.5}
            />
          </p>
        </div>
        <div className="deploy-data">
          <h4>Total SSD</h4>
          <p className="countup-large">
            <CountUp
              style={{ fontSize: '36px' }}
              start={0}
              end={data.activeStorage}
              duration={2.5}
              decimal=","
              decimals={2}
            />{' '}
            TB
          </p>
        </div>
      </div>
      <h5>Countries : 78</h5>
      <button className="button-landing-3">DEPLOY NOW</button>
    </div>
  );
};

export default DeployOption;
