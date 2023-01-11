import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProxyCreateExportFormatEnum {
    Csv = "csv",
    Html = "html",
    Excel = "Excel"
}
export declare class ProxyCreateExport extends SpeakeasyBase {
    convertToCurrencies?: string;
    encrypted?: boolean;
    fileId?: string;
    format: ProxyCreateExportFormatEnum;
    name?: string;
    query: string;
    size?: number;
    status?: string;
    statusReason?: string;
    zip?: boolean;
}
