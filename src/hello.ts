import fixString from './utils/fixString1';

export default function hello(str: string): string {
  return `Hello, ${fixString(str)}!`
};
