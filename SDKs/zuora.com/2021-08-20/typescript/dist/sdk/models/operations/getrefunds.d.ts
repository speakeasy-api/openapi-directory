import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRefundsQueryParams extends SpeakeasyBase {
    accountId?: string;
    amount?: number;
    createdById?: string;
    createdDate?: Date;
    methodType?: shared.GlobalRequestPageSizeEnum7;
    number?: string;
    pageSize?: number;
    paymentId?: string;
    refundDate?: Date;
    sort?: string;
    status?: shared.GlobalRequestPageSizeEnum8;
    type?: shared.GlobalRequestPageSizeEnum6;
    updatedById?: string;
    updatedDate?: Date;
}
export declare class GetRefundsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRefundsRequest extends SpeakeasyBase {
    queryParams: GetRefundsQueryParams;
    headers: GetRefundsHeaders;
}
export declare class GetRefundsResponse extends SpeakeasyBase {
    contentType: string;
    getRefundCollectionType?: shared.GetRefundCollectionType;
    headers: Record<string, string[]>;
    statusCode: number;
}
