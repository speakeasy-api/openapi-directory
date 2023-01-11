import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignSipTrunkNumbersPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AssignSipTrunkNumbersApplicationJson extends SpeakeasyBase {
    phoneNumbers?: string[];
}
export declare class AssignSipTrunkNumbersMultipartFormData extends SpeakeasyBase {
    phoneNumbers?: string[];
}
export declare class AssignSipTrunkNumbersRequests extends SpeakeasyBase {
    object?: AssignSipTrunkNumbersApplicationJson;
    object1?: AssignSipTrunkNumbersMultipartFormData;
}
export declare class AssignSipTrunkNumbersSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class AssignSipTrunkNumbersRequest extends SpeakeasyBase {
    pathParams: AssignSipTrunkNumbersPathParams;
    request?: AssignSipTrunkNumbersRequests;
    security: AssignSipTrunkNumbersSecurity;
}
export declare class AssignSipTrunkNumbersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    assignSipTrunkNumbers201ApplicationJSONAny?: any;
}
