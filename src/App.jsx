import './App.css';
import { useState } from 'react';

function App() {

  const [mistakes, setMistakes] = useState(0);

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const updateTime = () => {
    if (minutes<59) {
      setMinutes(minutes + 1);
    } else {
      setMinutes(0);
      setHours(hours+1);
    }
  } 

setInterval(() =>{ updateTime()}, 60000)

  let answersBlock1 = [ 4,9,8,7,2,5,3,6,1,5,3,1,6,4,9,8,2,7,6,7,2,8,3,1,5,4,9,9,4,2,1,5,6,8,3,7,1,8,5,3,7,4,9,6,2,7,6,3,9,2,8,4,1,5,2,8,3,5,7,4,6,1,9,4,9,6,2,1,8,7,5,3,1,5,7,3,9,6,2,8,4 ];

  const checkAnswer = (event) => {
    let entry = event.target.value
    let id = event.target.id

    if(entry == answersBlock1[id - 1] || entry == '') {
      //want to turn light blue light sudoku.
      event.currentTarget.classList.remove('wrong-answer');
    } else {
      // want to turn red and tally the error count.
      event.currentTarget.classList.add('wrong-answer');
      setMistakes(mistakes + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <p>mistakes = {mistakes}</p>
      <p>Timer: {hours} Hours {minutes} Minutes</p>
      </header>

      <main>
        <div className='whole-box'>
          <div className='box-1 boxes'>
            <div className='block-1 blocks'>
              {/* <input id='1' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>4</p>
            </div>
            <div className='block-2 blocks'>
              <input id='2' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks'>
              <input id='3' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks'>
              <input id='4' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks'>
              <input id='5' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks'>
              <input id='6' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks'>
              <input id='7' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks'>
              {/* <input id='8' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>6</p>
            </div>
            <div className='block-9 blocks'>
              {/* <input id='9' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>1</p>
            </div>
          </div>
          <div className='box-2 boxes'>
          <div className='block-1 blocks'>
              {/* <input id='10' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>5</p>
            </div>
            <div className='block-2 blocks'>
              <input id='11' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks'>
              <input id='12' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks'>
              <input id='13' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks'>
              <input id='14' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks'>
              <input id='15' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks'>
              <input id='16' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks'>
              <input id='17' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks'>
              {/* <input id='18' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>7</p>
            </div>
          </div>
          <div className='box-3 boxes'>
          <div className='block-1 blocks'>
              {/* <input id='19' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>6</p>
            </div>
            <div className='block-2 blocks'>
              <input id='20' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks'>
              {/* <input id='21' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>2</p>
            </div>
            <div className='block-4 blocks'>
              <input id='22' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks'>
              <input id='23' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks'>
              <input id='24' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks'>
              <input id='25' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks'>
              <input id='26' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks'>
              {/* <input id='27' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>9</p>
            </div>
          </div>
          <div className='box-4 boxes'>
          <div className='block-1 blocks'>
              <input id='28' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-2 blocks'>
              <input id='29' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks'>
              <input id='30' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks'>
              {/* <input id='31' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>1</p>
            </div>
            <div className='block-5 blocks'>
              {/* <input id='32' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>5</p>
            </div>
            <div className='block-6 blocks'>
              <input id='33' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks'>
              {/* <input id='34' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>8</p>
            </div>
            <div className='block-8 blocks'>
              <input id='35' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks'>
              {/* <input id='36' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>7</p>
            </div>
          </div>
          <div className='box-5 boxes'>
            <div className='block-1 blocks'>
              {/* <input id='37' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>1</p>
            </div>
            <div className='block-2 blocks'>
              <input id='38' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks'>
              <input id='39' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks'>
              <input id='40' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks'>
              <input id='41' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks'>
              <input id='42' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks'>
              {/* <input id='43' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>9</p>
            </div>
            <div className='block-8 blocks'>
              <input id='44' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks'>
              {/* <input id='45' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>2</p>
            </div>
          </div>
          <div className='box-6 boxes'>
          <div className='block-1 blocks'>
              <input id='46' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-2 blocks'>
              {/* <input id='47' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>6</p>
            </div>
            <div className='block-3 blocks'>
              {/* <input id='48' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>3</p>
            </div>
            <div className='block-4 blocks'>
              <input id='49' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks'>
              <input id='50' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks'>
              <input id='51' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks'>
              <input id='52' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks'>
              <input id='53' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks'>
              <input id='54' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
          </div>
          <div className='box-7 boxes'>
          <div className='block-1 blocks'>
              <input id='55' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-2 blocks'>
              <input id='56' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks'>
              <input id='57' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks'>
              {/* <input id='58' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>5</p>
            </div>
            <div className='block-5 blocks'>
              <input id='59' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks'>
              <input id='60' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks'>
              <input id='61' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks'>
              <input id='62' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks'>
              <input id='63' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
          </div>
          <div className='box-8 boxes'>
          <div className='block-1 blocks'>
              {/* <input id='64' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>4</p>
            </div>
            <div className='block-2 blocks'>
              <input id='65' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks'>
              <input id='66' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks'>
              {/* <input id='67' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>2</p>
            </div>
            <div className='block-5 blocks'>
              {/* <input id='68' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>1</p>
            </div>
            <div className='block-6 blocks'>
              <input id='69' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks'>
              <input id='70' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks'>
              <input id='71' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks'>
              {/* <input id='72' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>3</p>
            </div>
          </div>
          <div className='box-9 boxes'>
          <div className='block-1 blocks'>
              <input id='73' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-2 blocks'>
              {/* <input id='74' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>5</p>
            </div>
            <div className='block-3 blocks'>
              {/* <input id='75' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>7</p>
            </div>
            <div className='block-4 blocks'>
              <input id='76' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks'>
              <input id='77' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks'>
              <input id='78' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks'>
              {/* <input id='79' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p>2</p>
            </div>
            <div className='block-8 blocks'>
              <input id='80' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks'>
              <input id='81' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
