import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PastWebinarsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class PastWebinarsRequest extends SpeakeasyBase {
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class PastWebinarsWebinarInstancesWebinars extends SpeakeasyBase {
    /**
     * Start time.
     */
    startTime?: Date;
    /**
     * Webinar UUID.
     */
    uuid?: string;
}
/**
 * List of webinars.
 */
export declare class PastWebinarsWebinarInstances extends SpeakeasyBase {
    /**
     * List of ended webinar instances.
     */
    webinars?: PastWebinarsWebinarInstancesWebinars[];
}
export declare class PastWebinarsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of past webinar instances returned.
     */
    webinarInstances?: PastWebinarsWebinarInstances;
}
