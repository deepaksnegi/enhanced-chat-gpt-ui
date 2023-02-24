interface ChatGptOption {
  key: string;
  parameters?: {
    model?: string;
    prompt?: string;
    max_tokens?: number;
    temperature?: number;
  };
}

const useChatGpt = (option: ChatGptOption) => {
  // const api = () =>
  //   new ChatGPTAPI({
  //     apiKey: option.key,
  //     // completionParams: option.parameters,
  //   });
  // return api();
};

export default useChatGpt;
