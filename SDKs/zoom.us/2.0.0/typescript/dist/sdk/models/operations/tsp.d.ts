import { SpeakeasyBase } from "../../../internal/utils";
export declare class Tsp200ApplicationJsonDialInNumbers extends SpeakeasyBase {
    code?: string;
    number?: string;
    type?: string;
}
export declare enum Tsp200ApplicationJsonTspBridgeEnum {
    UsTspTb = "US_TSP_TB",
    EuTspTb = "EU_TSP_TB"
}
export declare class Tsp200ApplicationJson extends SpeakeasyBase {
    dialInNumberUnrestricted?: boolean;
    dialInNumbers?: Tsp200ApplicationJsonDialInNumbers[];
    enable?: boolean;
    masterAccountSettingExtended?: boolean;
    modifyCredentialForbidden?: boolean;
    tspBridge?: Tsp200ApplicationJsonTspBridgeEnum;
    tspEnabled?: boolean;
    tspProvider?: string;
}
export declare class TspResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tsp200ApplicationJSONObject?: Tsp200ApplicationJson;
}
