declare module 'papaparse' {
  export interface ParseConfig {
    header?: boolean;
    skipEmptyLines?: boolean;
    complete?: (results: any) => void;
    error?: (error: any) => void;
  }

  export interface Parser {
    parse(file: File, config: ParseConfig): void;
  }

  const Papa: Parser;
  export default Papa;
}
