import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TspUpdateApplicationJsonTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
export declare class TspUpdateApplicationJson extends SpeakeasyBase {
    dialInNumberUnrestricted?: boolean;
    enable?: boolean;
    masterAccountSettingExtended?: boolean;
    modifyCredentialForbidden?: boolean;
    tspBridge?: TspUpdateApplicationJsonTspBridgeEnum;
    tspEnabled?: boolean;
    tspProvider?: string;
}
export declare enum TspUpdateMultipartFormDataTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
export declare class TspUpdateMultipartFormData extends SpeakeasyBase {
    dialInNumberUnrestricted?: boolean;
    enable?: boolean;
    masterAccountSettingExtended?: boolean;
    modifyCredentialForbidden?: boolean;
    tspBridge?: TspUpdateMultipartFormDataTspBridgeEnum;
    tspEnabled?: boolean;
    tspProvider?: string;
}
export declare class TspUpdateRequests extends SpeakeasyBase {
    object?: TspUpdateApplicationJson;
    object1?: TspUpdateMultipartFormData;
}
export declare class TspUpdateRequest extends SpeakeasyBase {
    request: TspUpdateRequests;
}
export declare class TspUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
