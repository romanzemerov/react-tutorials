export type Review = {
  id: string;
  fullName: string;
  email: string;
  createdAt: Date;
  text: string;
};

export type formFieldTypes = 'name' | 'email' | 'text';

export type FormField = {
  id: formFieldTypes;
  value: string;
  label: string;
  multiline: boolean;
};

export type FormFieldValues = {
  [K in formFieldTypes]: string;
};
