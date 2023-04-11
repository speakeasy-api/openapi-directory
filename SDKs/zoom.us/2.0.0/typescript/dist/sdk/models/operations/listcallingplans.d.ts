import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListCallingPlans200ApplicationXMLCallingPlans extends SpeakeasyBase {
    /**
     * Total number of plan used.
     */
    assigned?: number;
    /**
     * Remaining number of calling plans that can be assigned.
     */
    available?: number;
    /**
     * Name of the plan.
     */
    name?: string;
    /**
     * Total number of plan subscriptions bought.
     */
    subscribed?: number;
    /**
     * Plan type. Refer to the Plan Number section [here](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans).
     */
    type?: number;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Calling plans listed successfully.
 *
 */
export declare class ListCallingPlans200ApplicationXML extends SpeakeasyBase {
    callingPlans?: ListCallingPlans200ApplicationXMLCallingPlans[];
}
export declare class ListCallingPlans200ApplicationJSONCallingPlans extends SpeakeasyBase {
    /**
     * Total number of plan used.
     */
    assigned?: number;
    /**
     * Remaining number of calling plans that can be assigned.
     */
    available?: number;
    /**
     * Name of the plan.
     */
    name?: string;
    /**
     * Total number of plan subscriptions bought.
     */
    subscribed?: number;
    /**
     * Plan type. Refer to the Plan Number section [here](https://marketplace.zoom.us/docs/api-reference/other-references/plans#zoom-phone-calling-plans).
     */
    type?: number;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Calling plans listed successfully.
 *
 */
export declare class ListCallingPlans200ApplicationJSON extends SpeakeasyBase {
    callingPlans?: ListCallingPlans200ApplicationJSONCallingPlans[];
}
export declare class ListCallingPlansResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Calling plans listed successfully.
     *
     */
    listCallingPlans200ApplicationJSONObject?: ListCallingPlans200ApplicationJSON;
}
