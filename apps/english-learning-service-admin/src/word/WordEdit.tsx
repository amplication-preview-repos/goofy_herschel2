import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const WordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Cluster" source="cluster" />
        <BooleanInput label="isLearned" source="isLearned" />
        <TextInput label="meaning" multiline source="meaning" />
        <TextInput label="Mnemonic" source="mnemonic" />
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Edit>
  );
};
