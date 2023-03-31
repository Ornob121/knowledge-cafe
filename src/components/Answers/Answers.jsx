import React from "react";

const Answers = () => {
  return (
    <div>
      <h5 className="text-center text-3xl text-yellow-600 mb-10 font-bold">
        Questions Answers
      </h5>
      <div className="mb-5">
        <p className="text-2xl text-red-400">
          Q1: What is the difference between props and state?
        </p>
        <p className="text-lg">
          Answer: props is used to send data to child component. While sending
          data props cannot be changed.On the other hand state can be changed.I
          can also use state to store data which my component needs.
        </p>
      </div>
      <div className="mb-5">
        <p className="text-2xl text-red-400">Q1: How does useState work?</p>
        <p className="text-lg">
          Answer: useState is a react hook which returns an array which contains
          a variable and a function we can set the variables initial value using
          useState(value) and we can change the variable value any time using
          the function useState returns.
        </p>
      </div>
      <div className="mb-5">
        <p className="text-2xl text-red-400">
          Q1: What does useEffect do besides data loading?
        </p>
        <p className="text-lg">
          Answer: useEffect is also a react hook. It execute code based on its
          dependency. It takes something called dependency. And when the value
          of that dependency changes it execute the code inside of it again.
        </p>
      </div>
      <div className="mb-5">
        <p className="text-2xl text-red-400">Q1: How does react work?</p>
        <p className="text-lg">
          Answer: React renders the components we make and shows us the result
          in actual dom react also have an virtual dom which helps react to
          update the actual dom fast.If we change something in the components it
          again create a virtual dom and compare it with the previous dom and it
          finds out which things are changed and then update the original dom.
        </p>
      </div>
    </div>
  );
};

export default Answers;
