import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const WordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Cluster" source="cluster" />
        <BooleanInput label="isLearned" source="isLearned" />
        <TextInput label="meaning" multiline source="meaning" />
        <TextInput label="Mnemonic" source="mnemonic" />
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Create>
  );
};
