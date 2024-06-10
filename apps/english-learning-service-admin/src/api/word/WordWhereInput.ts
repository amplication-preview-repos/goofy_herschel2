import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type WordWhereInput = {
  cluster?: StringNullableFilter;
  id?: StringFilter;
  isLearned?: BooleanNullableFilter;
  meaning?: StringNullableFilter;
  mnemonic?: StringNullableFilter;
  text?: StringNullableFilter;
};
