import { SortOrder } from "../../util/SortOrder";

export type WordOrderByInput = {
  cluster?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isLearned?: SortOrder;
  meaning?: SortOrder;
  mnemonic?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
