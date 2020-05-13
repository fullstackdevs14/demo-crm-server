type HelloArgs = {
  subject: string;
};
const hello = (obj: any, args: HelloArgs): string => {
  return `Hello, ${args.subject}! from Server`;
};

export default {
  hello
};
