import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRsPathParams extends SpeakeasyBase {
    rsNumber: string;
}
export declare class GetRsHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class GetRsRequest extends SpeakeasyBase {
    pathParams: GetRsPathParams;
    headers: GetRsHeaders;
}
export declare class GetRsResponse extends SpeakeasyBase {
    contentType: string;
    getrsDetailType?: Record<string, any>;
    headers: Record<string, string[]>;
    statusCode: number;
}
