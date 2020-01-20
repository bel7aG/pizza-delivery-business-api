import { Stream } from 'stream';

export interface Upload {
  filename: string;
  mimtype: string;
  encoding: string;
  createReadStream: () => Stream;
}
