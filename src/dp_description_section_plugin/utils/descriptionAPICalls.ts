export const fetchDescription = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        "This is default description of the dashboard but it is editable."
      );
    }, 5000);
  });
};

export const saveDescription = (description: string) => {
  console.log(`POST req. with ${description} as payload`);
};