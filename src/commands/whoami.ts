const whoamiObj = {
  message: [["guest "], ["stranger "], ["unknown "], ["man? "], ["woman? "]],
};

export const createWhoami = (): string[] => {
  const whoami: string[] = [];
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami;
};
