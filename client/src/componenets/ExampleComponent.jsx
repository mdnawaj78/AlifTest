import React from 'react';

const ExampleComponent = () => {
  return (
    <div className="p-6">
      <h1 className="text-h1 font-bold">Hello World</h1>
      <h2 className="text-h2">This is a subheading</h2>
      <h3 className="text-h3">This is another subheading</h3>
      <p className="text-text">This is some text content.</p>
      <span className="text-spanText">This is a span with a different color.</span>
      <button className="bg-buttonBackground text-buttonText py-2 px-4 rounded">
        Click Me
      </button>
    </div>
  );
};

export default ExampleComponent;
