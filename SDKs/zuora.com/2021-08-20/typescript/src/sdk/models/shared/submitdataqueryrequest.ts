import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubmitDataQueryRequestCompressionEnum {
    None = "NONE",
    Gzip = "GZIP",
    Zip = "ZIP"
}

export enum SubmitDataQueryRequestOutputTargetEnum {
    S3 = "S3"
}


// SubmitDataQueryRequestOutput
/** 
 * Additional information about the query results.
 * 
**/
export class SubmitDataQueryRequestOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=target" })
  target: SubmitDataQueryRequestOutputTargetEnum;
}

export enum SubmitDataQueryRequestOutputFormatEnum {
    Json = "JSON",
    Csv = "CSV",
    Tsv = "TSV",
    Dsv = "DSV"
}

export enum SubmitDataQueryRequestSourceDataEnum {
    Datahub = "DATAHUB",
    Live = "LIVE"
}


export class SubmitDataQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnSeparator" })
  columnSeparator?: string;

  @SpeakeasyMetadata({ data: "json, name=compression" })
  compression: SubmitDataQueryRequestCompressionEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=output" })
  output: SubmitDataQueryRequestOutput;

  @SpeakeasyMetadata({ data: "json, name=outputFormat" })
  outputFormat: SubmitDataQueryRequestOutputFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "json, name=readDeleted" })
  readDeleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceData" })
  sourceData?: SubmitDataQueryRequestSourceDataEnum;

  @SpeakeasyMetadata({ data: "json, name=useIndexJoin" })
  useIndexJoin?: boolean;
}
