import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarPanelistsDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarPanelistsDeleteRequest extends SpeakeasyBase {
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class WebinarPanelistsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
