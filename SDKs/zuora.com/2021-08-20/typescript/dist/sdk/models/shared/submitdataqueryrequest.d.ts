import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SubmitDataQueryRequestCompressionEnum {
    None = "NONE",
    Gzip = "GZIP",
    Zip = "ZIP"
}
export declare enum SubmitDataQueryRequestOutputTargetEnum {
    S3 = "S3"
}
/**
 * Additional information about the query results.
 *
**/
export declare class SubmitDataQueryRequestOutput extends SpeakeasyBase {
    target: SubmitDataQueryRequestOutputTargetEnum;
}
export declare enum SubmitDataQueryRequestOutputFormatEnum {
    Json = "JSON",
    Csv = "CSV",
    Tsv = "TSV",
    Dsv = "DSV"
}
export declare enum SubmitDataQueryRequestSourceDataEnum {
    Datahub = "DATAHUB",
    Live = "LIVE"
}
export declare class SubmitDataQueryRequest extends SpeakeasyBase {
    columnSeparator?: string;
    compression: SubmitDataQueryRequestCompressionEnum;
    encryptionKey?: string;
    output: SubmitDataQueryRequestOutput;
    outputFormat: SubmitDataQueryRequestOutputFormatEnum;
    query: string;
    readDeleted?: boolean;
    sourceData?: SubmitDataQueryRequestSourceDataEnum;
    useIndexJoin?: boolean;
}
