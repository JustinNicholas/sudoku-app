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
      //want to turn light blue like sudoku.
      event.currentTarget.classList.remove('wrong-answer');
      event.currentTarget.parentElement.classList.add('number' + event.target.value);
      console.log(event.currentTarget.parentElement.classList);
    } else {
      // want to turn red and tally the error count.
      event.currentTarget.classList.add('wrong-answer');
      setMistakes(mistakes + 1);
    }
  }

  const highlightColumnRow = (event) => {

    const blocks =  document.querySelectorAll('.light-highlighted');
    blocks.forEach(block => {
      block.classList.remove('light-highlighted');
    });
    const nums =  document.querySelectorAll('.green');
    nums.forEach(num => {
      num.classList.remove('green');
    });

    if (event.currentTarget.classList.contains('row-1')) {
      const divs =  document.querySelectorAll('.row-1');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('row-2')) {
      const divs =  document.querySelectorAll('.row-2');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('row-3')) {
      const divs =  document.querySelectorAll('.row-3');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('row-4')) {
      const divs =  document.querySelectorAll('.row-4');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('row-5')) {
      const divs =  document.querySelectorAll('.row-5');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('row-6')) {
      const divs =  document.querySelectorAll('.row-6');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('row-7')) {
      const divs =  document.querySelectorAll('.row-7');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('row-8')) {
      const divs =  document.querySelectorAll('.row-8');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('row-9')) {
      const divs =  document.querySelectorAll('.row-9');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    }

    if (event.currentTarget.classList.contains('col-1')) {
      const divs =  document.querySelectorAll('.col-1');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('col-2')) {
      const divs =  document.querySelectorAll('.col-2');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('col-3')) {
      const divs =  document.querySelectorAll('.col-3');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('col-4')) {
      const divs =  document.querySelectorAll('.col-4');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('col-5')) {
      const divs =  document.querySelectorAll('.col-5');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('col-6')) {
      const divs =  document.querySelectorAll('.col-6');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('col-7')) {
      const divs =  document.querySelectorAll('.col-7');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('col-8')) {
      const divs =  document.querySelectorAll('.col-8');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    } else if (event.currentTarget.classList.contains('col-9')) {
      const divs =  document.querySelectorAll('.col-9');
      divs.forEach(div => {
        div.classList.add('light-highlighted');
      });
    }

    const divs =  document.querySelectorAll('.highlighted');
    divs.forEach(div => {
      div.classList.remove('highlighted');
    });
    
    event.currentTarget.classList.add('highlighted');

    console.log(event.target.dataset.value);
    console.log(event.target.value);

    if (event.target.value){
      const numbers =  document.querySelectorAll('.number' + event.target.value);
      numbers.forEach(number => {
        number.classList.add('green');
      });
    } else {
      const numbers =  document.querySelectorAll('.number' + event.target.dataset.value);
      numbers.forEach(number => {
        number.classList.add('green');
      });
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <p>Mistakes = {mistakes}/3</p>
      <p>Timer: {hours} Hours {minutes} Minutes</p>
      </header>

      <main>
        <div className='whole-box'>
          <div className='box-1 boxes'>
            <div className='block-1 blocks row-1 col-1 number4' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='1' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='4'>4</p>
            </div>
            <div className='block-2 blocks row-1 col-2' onClick={(event) => highlightColumnRow(event)} >
              <input id='2' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks row-1 col-3' onClick={(event) => highlightColumnRow(event)}>
              <input id='3' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks row-2 col-1' onClick={(event) => highlightColumnRow(event)}>
              <input id='4' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks row-2 col-2' onClick={(event) => highlightColumnRow(event)}>
              <input id='5' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks row-2 col-3' onClick={(event) => highlightColumnRow(event)}>
              <input id='6' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks row-3 col-1' onClick={(event) => highlightColumnRow(event)}>
              <input id='7' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks row-3 col-2 number6' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='8' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='6'>6</p>
            </div>
            <div className='block-9 blocks row-3 col-3 number1' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='9' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='1'>1</p>
            </div>
          </div>
          <div className='box-2 boxes'>
          <div className='block-1 blocks row-1 col-4 number5' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='10' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='5'>5</p>
            </div>
            <div className='block-2 blocks row-1 col-5' onClick={(event) => highlightColumnRow(event)}>
              <input id='11' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks row-1 col-6' onClick={(event) => highlightColumnRow(event)}>
              <input id='12' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks row-2 col-4' onClick={(event) => highlightColumnRow(event)}>
              <input id='13' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks row-2 col-5' onClick={(event) => highlightColumnRow(event)}>
              <input id='14' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks row-2 col-6' onClick={(event) => highlightColumnRow(event)}>
              <input id='15' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks row-3 col-4' onClick={(event) => highlightColumnRow(event)}>
              <input id='16' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks row-3 col-5' onClick={(event) => highlightColumnRow(event)}>
              <input id='17' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks row-3 col-6 number7' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='18' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='7'>7</p>
            </div>
          </div>
          <div className='box-3 boxes'>
          <div className='block-1 blocks row-1 col-7 number6' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='19' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='6'>6</p>
            </div>
            <div className='block-2 blocks row-1 col-8' onClick={(event) => highlightColumnRow(event)}>
              <input id='20' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks row-1 col-9 number2' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='21' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='2'>2</p>
            </div>
            <div className='block-4 blocks row-2 col-7' onClick={(event) => highlightColumnRow(event)}>
              <input id='22' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks row-2 col-8' onClick={(event) => highlightColumnRow(event)}>
              <input id='23' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks row-2 col-9' onClick={(event) => highlightColumnRow(event)}>
              <input id='24' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks row-3 col-7' onClick={(event) => highlightColumnRow(event)}>
              <input id='25' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks row-3 col-8' onClick={(event) => highlightColumnRow(event)}>
              <input id='26' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks row-3 col-9 number9' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='27' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='9'>9</p>
            </div>
          </div>
          <div className='box-4 boxes'>
          <div className='block-1 blocks row-4 col-1' onClick={(event) => highlightColumnRow(event)}>
              <input id='28' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-2 blocks row-4 col-2' onClick={(event) => highlightColumnRow(event)}>
              <input id='29' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks row-4 col-3' onClick={(event) => highlightColumnRow(event)}>
              <input id='30' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks row-5 col-1 number1' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='31' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='1'>1</p>
            </div>
            <div className='block-5 blocks row-5 col-2 number5' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='32' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='5'>5</p>
            </div>
            <div className='block-6 blocks row-5 col-3' onClick={(event) => highlightColumnRow(event)}>
              <input id='33' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks row-6 col-1 number8' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='34' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='8'>8</p>
            </div>
            <div className='block-8 blocks row-6 col-2' onClick={(event) => highlightColumnRow(event)}>
              <input id='35' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks row-6 col-3 number7' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='36' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='7'>7</p>
            </div>
          </div>
          <div className='box-5 boxes'>
            <div className='block-1 blocks row-4 col-4 number1' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='37' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='1'>1</p>
            </div>
            <div className='block-2 blocks row-4 col-5' onClick={(event) => highlightColumnRow(event)}>
              <input id='38' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks row-4 col-6' onClick={(event) => highlightColumnRow(event)}>
              <input id='39' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks row-5 col-4' onClick={(event) => highlightColumnRow(event)}>
              <input id='40' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks row-5 col-5' onClick={(event) => highlightColumnRow(event)}>
              <input id='41' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks row-5 col-6' onClick={(event) => highlightColumnRow(event)}>
              <input id='42' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks row-6 col-4 number9' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='43' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='9'>9</p>
            </div>
            <div className='block-8 blocks row-6 col-5' onClick={(event) => highlightColumnRow(event)}>
              <input id='44' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks row-6 col-6 number2' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='45' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='2'>2</p>
            </div>
          </div>
          <div className='box-6 boxes'>
          <div className='block-1 blocks row-4 col-7' onClick={(event) => highlightColumnRow(event)}>
              <input id='46' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-2 blocks row-4 col-8 number6' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='47' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='6'>6</p>
            </div>
            <div className='block-3 blocks row-4 col-9 number3' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='48' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='3'>3</p>
            </div>
            <div className='block-4 blocks row-5 col-7' onClick={(event) => highlightColumnRow(event)}>
              <input id='49' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks row-5 col-8' onClick={(event) => highlightColumnRow(event)}>
              <input id='50' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks row-5 col-9' onClick={(event) => highlightColumnRow(event)}>
              <input id='51' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks row-6 col-7' onClick={(event) => highlightColumnRow(event)}>
              <input id='52' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks row-6 col-8' onClick={(event) => highlightColumnRow(event)}>
              <input id='53' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks row-6 col-9' onClick={(event) => highlightColumnRow(event)}>
              <input id='54' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
          </div>
          <div className='box-7 boxes'>
          <div className='block-1 blocks row-7 col-1' onClick={(event) => highlightColumnRow(event)}>
              <input id='55' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-2 blocks row-7 col-2' onClick={(event) => highlightColumnRow(event)}>
              <input id='56' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks row-7 col-3' onClick={(event) => highlightColumnRow(event)}>
              <input id='57' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks row-8 col-1 number5' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='58' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='5'>5</p>
            </div>
            <div className='block-5 blocks row-8 col-2' onClick={(event) => highlightColumnRow(event)}>
              <input id='59' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks row-8 col-3' onClick={(event) => highlightColumnRow(event)}>
              <input id='60' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks row-9 col-1' onClick={(event) => highlightColumnRow(event)}>
              <input id='61' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks row-9 col-2' onClick={(event) => highlightColumnRow(event)}>
              <input id='62' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks row-9 col-3' onClick={(event) => highlightColumnRow(event)}>
              <input id='63' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
          </div>
          <div className='box-8 boxes'>
          <div className='block-1 blocks row-7 col-4 number4 number4' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='64' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='4'>4</p>
            </div>
            <div className='block-2 blocks row-7 col-5' onClick={(event) => highlightColumnRow(event)}>
              <input id='65' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-3 blocks row-7 col-6' onClick={(event) => highlightColumnRow(event)}>
              <input id='66' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-4 blocks row-8 col-4 number2' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='67' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='2'>2</p>
            </div>
            <div className='block-5 blocks row-8 col-5 number1' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='68' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='1'>1</p>
            </div>
            <div className='block-6 blocks row-8 col-6' onClick={(event) => highlightColumnRow(event)}>
              <input id='69' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks row-9 col-4' onClick={(event) => highlightColumnRow(event)}>
              <input id='70' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-8 blocks row-9 col-5' onClick={(event) => highlightColumnRow(event)}>
              <input id='71' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks row-9 col-6 number3' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='72' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='3'>3</p>
            </div>
          </div>
          <div className='box-9 boxes'>
          <div className='block-1 blocks row-7 col-7' onClick={(event) => highlightColumnRow(event)}>
              <input id='73' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-2 blocks row-7 col-8 number5' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='74' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='5'>5</p>
            </div>
            <div className='block-3 blocks row-7 col-9 number7' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='75' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='7'>7</p>
            </div>
            <div className='block-4 blocks row-8 col-7' onClick={(event) => highlightColumnRow(event)}>
              <input id='76' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-5 blocks row-8 col-8' onClick={(event) => highlightColumnRow(event)}>
              <input id='77' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-6 blocks row-8 col-9' onClick={(event) => highlightColumnRow(event)}>
              <input id='78' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-7 blocks row-9 col-7 number2' onClick={(event) => highlightColumnRow(event)}>
              {/* <input id='79' className='block-input' onChange={(event) => checkAnswer(event)} type="text" /> */}
              <p data-value='2'>2</p>
            </div>
            <div className='block-8 blocks row-9 col-8' onClick={(event) => highlightColumnRow(event)}>
              <input id='80' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-9 blocks row-9 col-9' onClick={(event) => highlightColumnRow(event)}>
              <input id='81' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
