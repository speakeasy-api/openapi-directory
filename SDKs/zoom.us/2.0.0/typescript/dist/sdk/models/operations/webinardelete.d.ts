import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarDeleteRequest extends SpeakeasyBase {
    /**
     * `true`: Notify panelists and registrants about the webinar cancellation via email.
     *
     * @remarks
     *
     * `false`: Do not send any email notification to webinar registrants and panelists.
     *
     * The default value of this field is `false`.
     */
    cancelWebinarReminder?: string;
    /**
     * The meeting occurrence ID.
     */
    occurrenceId?: string;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class WebinarDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
