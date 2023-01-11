import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PastWebinarsPathParams extends SpeakeasyBase {
    webinarId: number;
}
export declare class PastWebinarsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class PastWebinarsWebinarInstancesWebinars extends SpeakeasyBase {
    startTime?: Date;
    uuid?: string;
}
/**
 * List of webinars.
**/
export declare class PastWebinarsWebinarInstances extends SpeakeasyBase {
    webinars?: PastWebinarsWebinarInstancesWebinars[];
}
export declare class PastWebinarsRequest extends SpeakeasyBase {
    pathParams: PastWebinarsPathParams;
    security: PastWebinarsSecurity;
}
export declare class PastWebinarsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webinarInstances?: PastWebinarsWebinarInstances;
}
