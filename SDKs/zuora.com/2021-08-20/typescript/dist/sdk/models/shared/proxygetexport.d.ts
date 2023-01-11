import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProxyGetExportFormatEnum {
    Csv = "csv",
    Html = "html",
    Excel = "Excel"
}
export declare class ProxyGetExport extends SpeakeasyBase {
    convertToCurrencies?: string;
    createdById?: string;
    createdDate?: Date;
    encrypted?: boolean;
    fileId?: string;
    format?: ProxyGetExportFormatEnum;
    id?: string;
    name?: string;
    query?: string;
    size?: number;
    status?: string;
    statusReason?: string;
    updatedById?: string;
    updatedDate?: Date;
    zip?: boolean;
}
