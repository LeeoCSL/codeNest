export const codesToSnippet = [
    {
    text: 'sentry_step_1',
    code: ``
},
{
    text: 'sentry_step_2',
    code: `yarn add @sentry/react`
},

{
    text: 'sentry_step_3',
    code: `import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "--CÓDIGO FORNECIDO AO CRIAR A CONTA NO SENTRY--",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});
//resto do código`
},

{
    text: 'sentry_step_4',
    code: `throw new Error("This is your first error!");`
},

{
    text: 'sentry_step_5',
    code: ``
}

]
