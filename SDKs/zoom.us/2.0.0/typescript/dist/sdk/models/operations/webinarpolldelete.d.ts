import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarPollDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarPollDeleteRequest extends SpeakeasyBase {
    /**
     * The poll ID
     */
    pollId: string;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class WebinarPollDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
