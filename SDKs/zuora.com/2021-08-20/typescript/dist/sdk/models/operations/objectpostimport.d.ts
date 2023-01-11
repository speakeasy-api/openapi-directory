import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectPostImportQueryParams extends SpeakeasyBase {
    rejectUnknownFields?: boolean;
}
export declare class ObjectPostImportHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectPostImportRequestBodyFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
export declare enum ObjectPostImportRequestBodyImportTypeEnum {
    Usage = "Usage",
    Payment = "Payment",
    Quote = "Quote",
    TaxationDetail = "TaxationDetail",
    UpdateAccountingCode = "UpdateAccountingCode",
    CreateRevenueSchedule = "CreateRevenueSchedule",
    UpdateRevenueSchedule = "UpdateRevenueSchedule",
    DeleteRevenueSchedule = "DeleteRevenueSchedule",
    ImportFxRate = "ImportFXRate"
}
export declare class ObjectPostImportRequestBody extends SpeakeasyBase {
    file: ObjectPostImportRequestBodyFile;
    importType: ObjectPostImportRequestBodyImportTypeEnum;
    name: string;
}
export declare class ObjectPostImportRequest extends SpeakeasyBase {
    queryParams: ObjectPostImportQueryParams;
    headers: ObjectPostImportHeaders;
    request: ObjectPostImportRequestBody;
}
export declare class ObjectPostImportResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyPostImport?: shared.ProxyPostImport;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
