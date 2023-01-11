import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ObjectGetCommunicationProfilePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ObjectGetCommunicationProfileQueryParams extends SpeakeasyBase {
    fields?: string;
}
export declare class ObjectGetCommunicationProfileHeaders extends SpeakeasyBase {
    zuoraEntityIds?: string;
    zuoraTrackId?: string;
}
export declare class ObjectGetCommunicationProfileRequest extends SpeakeasyBase {
    pathParams: ObjectGetCommunicationProfilePathParams;
    queryParams: ObjectGetCommunicationProfileQueryParams;
    headers: ObjectGetCommunicationProfileHeaders;
}
export declare class ObjectGetCommunicationProfileResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    proxyGetCommunicationProfile?: shared.ProxyGetCommunicationProfile;
    proxyNoDataResponse?: shared.ProxyNoDataResponse;
    proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;
    statusCode: number;
}
