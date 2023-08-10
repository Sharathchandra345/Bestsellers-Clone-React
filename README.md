# ES7 Snippets

rafce (arrow func with export)
rfce (regular func with export )
same as the file name
react auto import
uncheck
React Snippets › Settings: Import React On Top

## JSX RULES

return only one single element

can also return sections,divs and other things overall

Fragments - Lets us group elements without adding extra nodes

return <React.Fragment>...rest of the return </React.Fragment>

this also has shorthand which is - <>...rest of the return </>

#CamelCase property naming convention

return (

  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)
// in html
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>

class becomes ClassName

All elemnts should be self closing in react , otherwise we get a error

### Nest Components

yes,we can nest components normally

function Greeting() {
return (

<div>
<Person />
<Message />
</div>
);
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
return <p>this is my message</p>;
};

#### CSS

create index.css in src

then use
import "./index.css";
to import css

## Local Images in React (Public Folder)

-external images (hosted on a different server) - we just need the url

-local images (public folder) - less performant

-local images (src folder) -
better solution for assets,since under the hood they get optimized.

## inline styles

stype prop
{} - means we are going back to js land

values are typed in between ''

```js
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
    hmm web dev hmm
  </h4>
);
```

-same css rules still apply i.e (inline vs external)

-alternative option

```js
const inlineHeadignStyles = {
  color: "#61798d",
};
```

there is no right or wrong , comes to preferences

### JSX - JavaScript

### props

different values to be rendered for a same component
only displayed when provided

### Multiple Aprroaches to Access Props

Access Props - Multiple Approaches
there is no right or wrong - again preference !!!

destructuring in Vanilla JS

saves time/typing

pull out the properties

don't need to reference object anymore

```js
const someObject = {
  name: "john",
  job: "developer",
  location: "florida",
};

console.log(someObject.name);
const { name, job } = someObject;
console.log(job);
```

no need for all the props.propName
destructure inside component

```js
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

destructure in function parameters (in our case props)
if you have console.log(props) - it won't be defined

```js
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  );
};
```

### children prop

when you want something specific for only one component we use children prop

we add children keyword in the list then we use whatever we want to display in the particular component in between the brackets

```js
function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // rest of the logic
};
const Book = (props) => {
  const { img, title, author, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      {children}
    </article>
  );
};
```

### key prop

typically it is going to be a id

Events - Fundamentals
Vanilla JS
const btn = document.getElementById('btn');

```js
btn.addEventListener("click", function (e) {
  // access event object
  // do something when event fires
});
```

similar approach
element, event, function
again camelCase

```js
const EventExamples = () => {
  const handleButtonClick = () => {
    alert("handle button click");
  };
  return (
    <section>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  );
};
```

React Events
no need to memorize them(idea is the same)
most common
onClick (click events)
onSubmit (submit form )
onChange (input change )
