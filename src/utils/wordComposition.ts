export interface WordComposition {
  word: string;
  priority: {
    zero: string[];
    one: string[];
    two: string[];
    three: string[];
    four: string[];
    five: string[];
    six: string[];
    seven: string[];
    eight: string[];
    nine: string[];
    ten: string[];
  };
  signification: string;
}

export const wordComposition = (composition: WordComposition): string => {
  const priorityOrder: (keyof WordComposition["priority"])[] = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  return priorityOrder
    .map((priority) => composition.priority[priority].join(""))
    .join("");
};
