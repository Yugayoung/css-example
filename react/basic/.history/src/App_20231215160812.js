import './App.css';

function App() {
  const name = '엘리';
  return (
    <>
      <h1 className='orange'>Hello!</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src='https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMTFfMzkg%2FMDAxNjk2OTg5MDQxOTM0.bm48w1EbJZJxouxDTLgUbZoIvKCiryVpZx7M-ZRViWYg.t5SgwAPVbcjEcNd28Pa1p-JocilCrYOLPF4DUBhXoa8g.PNG.lxeris7%2F20231006%25A3%25DF150334%25A3%25DF0001.png&type=ff332_332'
        alt=''
      />
    </>
  );
}

export default App;
