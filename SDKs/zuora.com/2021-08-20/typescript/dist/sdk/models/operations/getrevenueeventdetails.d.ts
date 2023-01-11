import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRevenueEventDetailsPathParams extends SpeakeasyBase {
    eventNumber: string;
}
export declare class GetRevenueEventDetailsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRevenueEventDetailsRequest extends SpeakeasyBase {
    pathParams: GetRevenueEventDetailsPathParams;
    headers: GetRevenueEventDetailsHeaders;
}
export declare class GetRevenueEventDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getRevenueEventDetailType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
