import {MetaData} from "./meta-data";

export class Document {
  id!: number;
  name!: string;
  type!: string;
  size!: string;
  creationDate!: Date;
  filePath!: string;
  metaDatas!: MetaData[];
}
