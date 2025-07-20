export type ITEM = {
  id: number;
  title: string;
  content: TextItem[];
};

interface TextItem {
  id: string;
  text: string;
}
