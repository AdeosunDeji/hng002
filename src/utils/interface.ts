export interface IUser {
  slackUsername?: string;
  backend: boolean;
  age?: number;
  bio?: string;
}

export enum operation {
  addition = "addition",
  subtraction = "subtraction",
  multiplication = "multiplication",
}

export interface AOP {
  operation_type: operation;
  x: number,
  y: number
}

export interface IUser2 {
  slackUsername: string
  operation_type: operation;
  result?: number
}
