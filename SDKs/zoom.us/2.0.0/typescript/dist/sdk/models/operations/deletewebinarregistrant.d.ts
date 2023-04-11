import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWebinarRegistrantRequest extends SpeakeasyBase {
    /**
     * The webinar occurence ID.
     */
    occurrenceId?: string;
    /**
     * The registrant ID.
     */
    registrantId: string;
    /**
     * The webinar ID.
     */
    webinarId: number;
}
export declare class DeleteWebinarRegistrantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
