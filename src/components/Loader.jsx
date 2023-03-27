import RingLoader from 'react-spinners/RingLoader';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <RingLoader />
    </div>
  );
};
