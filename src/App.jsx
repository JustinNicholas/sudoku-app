import './App.css';

function App() {

  let answersBlock1 = [ 4,9,8,7,2,5,3,6,1 ];

  const checkAnswer = (event) => {
    let entry = event.target.value
    let id = event.target.id

    if(entry == answersBlock1[id - 1]) {
      //want to turn light blue light sudoku.
    } else {
      // want to turn red and tally the error count.
    }
  }

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <main>
        <div className='whole-box'>
          <div className='box-1 boxes'>
            <div className='block-1 blocks'>
              <input id='1' className='block-input' onChange={(event) => checkAnswer(event)} type="text" />
            </div>
            <div className='block-2 blocks'>
              <input id='2' className='block-input' type="text" />
            </div>
            <div className='block-3 blocks'>
              <p>3</p>
            </div>
            <div className='block-4 blocks'>
              <p>9</p>
            </div>
            <div className='block-5 blocks'>
              <input id='5' className='block-input' type="text" />
            </div>
            <div className='block-6 blocks'>
              <input id='6' className='block-input' type="text" />
            </div>
            <div className='block-7 blocks'>
              <input id='7' className='block-input' type="text" />
            </div>
            <div className='block-8 blocks'>
              <input id='8' className='block-input' type="text" />
            </div>
            <div className='block-9 blocks'>
              <input id='9' className='block-input' type="text" />
            </div>
          </div>
          <div className='box-2 boxes'>
            <div className='block-1 blocks'>

            </div>
            <div className='block-2 blocks'>
            <p>4</p>
            </div>
            <div className='block-3 blocks'>

            </div>
            <div className='block-4 blocks'>

            </div>
            <div className='block-5 blocks'>
            <p>5</p>
            </div>
            <div className='block-6 blocks'>

            </div>
            <div className='block-7 blocks'>

            </div>
            <div className='block-8 blocks'>

            </div>
            <div className='block-9 blocks'>

            </div>
          </div>
          <div className='box-3 boxes'>
            <div className='block-1 blocks'>
            <p>6</p>
            </div>
            <div className='block-2 blocks'>

            </div>
            <div className='block-3 blocks'>

            </div>
            <div className='block-4 blocks'>

            </div>
            <div className='block-5 blocks'>
            <p>1</p>
            </div>
            <div className='block-6 blocks'>

            </div>
            <div className='block-7 blocks'>

            </div>
            <div className='block-8 blocks'>

            </div>
            <div className='block-9 blocks'>

            </div>
          </div>
          <div className='box-4 boxes'>
            <div className='block-1 blocks'>

            </div>
            <div className='block-2 blocks'>

            </div>
            <div className='block-3 blocks'>
            <p>6</p>
            </div>
            <div className='block-4 blocks'>

            </div>
            <div className='block-5 blocks'>

            </div>
            <div className='block-6 blocks'>
            <p>5</p>
            </div>
            <div className='block-7 blocks'>

            </div>
            <div className='block-8 blocks'>

            </div>
            <div className='block-9 blocks'>
            <p>7</p>
            </div>
          </div>
          <div className='box-5 boxes'>
            <div className='block-1 blocks'>
            <p>5</p>
            </div>
            <div className='block-2 blocks'>
            <p>7</p>
            </div>
            <div className='block-3 blocks'>

            </div>
            <div className='block-4 blocks'>

            </div>
            <div className='block-5 blocks'>
            <p>3</p>
            </div>
            <div className='block-6 blocks'>

            </div>
            <div className='block-7 blocks'>

            </div>
            <div className='block-8 blocks'>

            </div>
            <div className='block-9 blocks'>

            </div>
          </div>
          <div className='box-6 boxes'>
            <div className='block-1 blocks'>

            </div>
            <div className='block-2 blocks'>

            </div>
            <div className='block-3 blocks'>
            <p>1</p>
            </div>
            <div className='block-4 blocks'>

            </div>
            <div className='block-5 blocks'>
            <p>9</p>
            </div>
            <div className='block-6 blocks'>

            </div>
            <div className='block-7 blocks'>

            </div>
            <div className='block-8 blocks'>
            <p>8</p>
            </div>
            <div className='block-9 blocks'>

            </div>
          </div>
          <div className='box-7 boxes'>
            <div className='block-1 blocks'>
            <p>3</p>
            </div>
            <div className='block-2 blocks'>

            </div>
            <div className='block-3 blocks'>

            </div>
            <div className='block-4 blocks'>

            </div>
            <div className='block-5 blocks'>

            </div>
            <div className='block-6 blocks'>

            </div>
            <div className='block-7 blocks'>
            <p>2</p>
            </div>
            <div className='block-8 blocks'>

            </div>
            <div className='block-9 blocks'>

            </div>
          </div>
          <div className='box-8 boxes'>
            <div className='block-1 blocks'>

            </div>
            <div className='block-2 blocks'>

            </div>
            <div className='block-3 blocks'>
            <p>4</p>
            </div>
            <div className='block-4 blocks'>
            <p>8</p>
            </div>
            <div className='block-5 blocks'>

            </div>
            <div className='block-6 blocks'>
            <p>7</p>
            </div>
            <div className='block-7 blocks'>

            </div>
            <div className='block-8 blocks'>
            <p>1</p>
            </div>
            <div className='block-9 blocks'>

            </div>
          </div>
          <div className='box-9 boxes'>
            <div className='block-1 blocks'>

            </div>
            <div className='block-2 blocks'>

            </div>
            <div className='block-3 blocks'>
            <p>8</p>
            </div>
            <div className='block-4 blocks'>

            </div>
            <div className='block-5 blocks'>

            </div>
            <div className='block-6 blocks'>

            </div>
            <div className='block-7 blocks'>

            </div>
            <div className='block-8 blocks'>
            <p>4</p>
            </div>
            <div className='block-9 blocks'>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
