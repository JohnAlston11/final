import './App.css';


function App() {
  return (
    <div className="App">
      <div className='header'>
        <header>
          <img className='profile-pic' src="https://media.licdn.com/dms/image/D4E03AQFaLbyEmCqIMg/profile-displayphoto-shrink_400_400/0/1677590677887?e=1688601600&v=beta&t=eoTjCno_IHasP0RPGXBVlTKXmWwkxTZawnVjOtu546E"/>
          <h4 className='name'>Johnathan Alston</h4>
        </header>
      </div>
      <hr />
      <div className='bio'>
        <p>
          Hi, my name is Johnathan, but most people call me John. I am currently studying web development. I was, in the past, selected to join a coding program. From that moment I've grown a passion for it. In the beginning code looked like jibberish to me. Couldn't tell you what was going on at all. I took it day by day. There was and still are times when there is lots of frustration. It is all worth it in the end when you get something to work. Now, I am hoping to get my degree and further my knowledge on the subject.
        </p>
        <br/>
        <p>
          This course has went over a ton of information. I did not know psuedo-elements and classes existed in CSS. They can be super helpful and gives your webpage the ability to perform special features. Moving forward I would like to inject it into some of my web pages.
        </p>
        <p>
          There were also some HTML elements that I never felt the need to use. At least that is what I thought. I now see how some of these elements are useful and improves the readablity of your web page. I think what's is most important is I stay consistent in using these new tools.
        </p>
        <br/>
        <p>
          The JavaScript technology I used to build this website is React.js. React is a JavaScript framework created by Meta. It is made to improve websites load time, memory, and overall efficiency. What it does is create a virtual DOM. Instead of rendering a new page with each update, react only updates specific components. This improves the speed of the website.
        </p>
      </div>
      <div>
        <footer>
          If you would like to check out my resume, here's a <a href='https://docs.google.com/document/d/1oZMKLCeGUcowiZ-Kf6GLKf0fg_ZrnTFLuNHlKRAIgqs/edit?usp=sharing'>link</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
