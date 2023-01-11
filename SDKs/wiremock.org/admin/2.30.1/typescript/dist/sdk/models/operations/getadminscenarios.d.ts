import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAdminScenarios200ApplicationJsonScenarios extends SpeakeasyBase {
    id?: string;
    name?: string;
    possibleStates?: string[];
    state?: string;
}
export declare class GetAdminScenarios200ApplicationJson extends SpeakeasyBase {
    scenarios?: GetAdminScenarios200ApplicationJsonScenarios[];
}
export declare class GetAdminScenariosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAdminScenarios200ApplicationJSONObject?: GetAdminScenarios200ApplicationJson;
}
