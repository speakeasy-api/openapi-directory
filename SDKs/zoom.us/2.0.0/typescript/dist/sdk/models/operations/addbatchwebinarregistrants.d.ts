import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddBatchWebinarRegistrantsPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare class AddBatchWebinarRegistrantsApplicationJsonRegistrants extends SpeakeasyBase {
    email: string;
    firstName: string;
    lastName?: string;
}
export declare class AddBatchWebinarRegistrantsApplicationJson extends SpeakeasyBase {
    autoApprove?: boolean;
    registrants?: AddBatchWebinarRegistrantsApplicationJsonRegistrants[];
}
export declare class AddBatchWebinarRegistrantsMultipartFormDataRegistrants extends SpeakeasyBase {
    email: string;
    firstName: string;
    lastName?: string;
}
export declare class AddBatchWebinarRegistrantsMultipartFormData1 extends SpeakeasyBase {
    autoApprove?: boolean;
    registrants?: AddBatchWebinarRegistrantsMultipartFormDataRegistrants[];
}
export declare class AddBatchWebinarRegistrantsRequests extends SpeakeasyBase {
    object?: AddBatchWebinarRegistrantsApplicationJson;
    object1?: AddBatchWebinarRegistrantsMultipartFormData1;
}
export declare class AddBatchWebinarRegistrantsSecurity extends SpeakeasyBase {
    oAuth?: shared.SchemeOAuth;
    bearer?: shared.SchemeBearer;
}
export declare class AddBatchWebinarRegistrants200ApplicationJsonRegistrants extends SpeakeasyBase {
    email?: string;
    joinUrl?: string;
    registrantId?: string;
}
export declare class AddBatchWebinarRegistrants200ApplicationJson extends SpeakeasyBase {
    registrants?: AddBatchWebinarRegistrants200ApplicationJsonRegistrants[];
}
export declare class AddBatchWebinarRegistrantsRequest extends SpeakeasyBase {
    pathParams: AddBatchWebinarRegistrantsPathParams;
    request?: AddBatchWebinarRegistrantsRequests;
    security: AddBatchWebinarRegistrantsSecurity;
}
export declare class AddBatchWebinarRegistrantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    addBatchWebinarRegistrants200ApplicationJSONObject?: AddBatchWebinarRegistrants200ApplicationJson;
}
