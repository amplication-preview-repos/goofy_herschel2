import { Word as TWord } from "../api/word/Word";

export const WORD_TITLE_FIELD = "cluster";

export const WordTitle = (record: TWord): string => {
  return record.cluster?.toString() || String(record.id);
};
