import React from "react";

type Props = {};

const KeyInput = (props: Props) => {
  return (
    <div>
      <form>
        <input placeholder="Enter the api key... " value="" className="input" />
      </form>
      <div className="generate-key">
        <p>Don't have api key yet? </p>
        <a
          href="https://platform.openai.com/account/api-keys"
          className="button"
        >
          Generate Keys
        </a>
      </div>
    </div>
  );
};

export default KeyInput;
