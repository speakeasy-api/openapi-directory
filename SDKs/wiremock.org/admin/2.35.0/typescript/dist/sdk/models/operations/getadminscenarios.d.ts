import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAdminScenarios200ApplicationJSONScenarios extends SpeakeasyBase {
    /**
     * The scenario ID
     */
    id?: string;
    /**
     * The scenario name
     */
    name?: string;
    possibleStates?: string[];
    /**
     * The current state of this scenario
     */
    state?: string;
}
/**
 * All scenarios
 */
export declare class GetAdminScenarios200ApplicationJSON extends SpeakeasyBase {
    scenarios?: GetAdminScenarios200ApplicationJSONScenarios[];
}
export declare class GetAdminScenariosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * All scenarios
     */
    getAdminScenarios200ApplicationJSONObject?: GetAdminScenarios200ApplicationJSON;
}
