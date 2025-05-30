import {
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const RoundedProgressBar = ({ value }: { value: number }) => {
  return (
    <div className='h-full w-full'>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: '#facc15',
          textColor: 'white',
          trailColor: 'white',
          backgroundColor: '#f8f8f8',
        })}
      />
    </div>
  );
};

export default RoundedProgressBar;
