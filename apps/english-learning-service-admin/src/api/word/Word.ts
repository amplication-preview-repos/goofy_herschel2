export type Word = {
  cluster: string | null;
  createdAt: Date;
  id: string;
  isLearned: boolean | null;
  meaning: string | null;
  mnemonic: string | null;
  text: string | null;
  updatedAt: Date;
};
