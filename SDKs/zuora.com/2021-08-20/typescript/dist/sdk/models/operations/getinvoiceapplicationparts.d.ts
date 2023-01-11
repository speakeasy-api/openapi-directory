import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInvoiceApplicationPartsPathParams extends SpeakeasyBase {
    invoiceId: string;
}
export declare class GetInvoiceApplicationPartsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetInvoiceApplicationPartsRequest extends SpeakeasyBase {
    pathParams: GetInvoiceApplicationPartsPathParams;
    headers: GetInvoiceApplicationPartsHeaders;
}
export declare class GetInvoiceApplicationPartsResponse extends SpeakeasyBase {
    contentType: string;
    getInvoiceApplicationPartCollectionType?: shared.GetInvoiceApplicationPartCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
