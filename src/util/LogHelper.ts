/**
 * LogHelper for logs customized
 * @param title A string for title defined
 * @param data A object for to list arrays or objects
 */

interface LogHelperOutput {
  title: string;
  data: Array<unknown> | Object;
}

const logHelper = ({ title, data }: LogHelperOutput) => {
  return console.log(
    `%c ${title} >> Logs: `,
    'background: #4b6584; color: #d1d8e0; border-radius: 0.2rem; padding: 0.4rem;',
    data,
  );
};

export { logHelper };
