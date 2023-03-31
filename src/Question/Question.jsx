import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='my-10'>
            <h3 className='text-center text-3xl'>Question and Answer Section</h3>
            <div className='flex justify-center my-7'>
                <div className='question-container px-6 py-8 rounded-xl card shadow-xl shadow-2xl rounded-xl'>
                    <h3>1. Props vs State?</h3>
                    <p><span style={{color: 'green'}}>Ans:</span> "Props" is a medium of passing data from Parent component to children component and props are pass like a html attribute and child component receive like and an object. We can pass any kind of JavaScript value (variable, array, object, function etc) by props. On the other hand "State" is is a representation of information about the component at present</p>
                    <h3>2. How Does UseState Work?</h3>
                    <p><span style={{ color: 'green' }}>Ans:</span>
                         "UseState" is a react hook it is used for storing the component current state for making website more interactive. "UseState" return two value in a array, first value is present state and second value is a function to set the current value on the state.
                    </p>
                    <h3>3. What is the purpose of use effect other than fetching data?</h3>
                    <p><span style={{ color: 'green' }}>Ans:</span>
                        "UseEffect" is a react hook to manage side effect of website after the component render. UseEffect can handle many things other than fetching data like Manipulating DOM: UseEffect can manipulate DOM in depend on a condition or dependencies then update the UI. It can handle event listener effect on specific behavior or animation effect, component mounting unmounting and many more. UseEffect hook make component more flexible and versatile.
                    </p>
                    <h3>4. How Does React Work?</h3>
                    <p><span style={{ color: 'green' }}>Ans:</span>
                        React is a component based modular JavaScript libraries for building UI. React build every part of UI by component. It create a virtual DOM which a lightweight copy of real DOM. When in DOM a small piece is updated React doesn't re-render the full UI it compare virtual DOM and real DOM which part is changed and identify the part then update the small part in real DOM by DIFF algorithm. In this method is the full website doesn't need to refresh so that user can get a optimal experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Question;