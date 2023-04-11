import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarPanelistDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarPanelistDeleteRequest extends SpeakeasyBase {
    /**
     * The panelist ID or panelist email.
     */
    panelistId: number;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class WebinarPanelistDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
