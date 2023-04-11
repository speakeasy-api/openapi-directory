import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarStatusSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare enum WebinarStatusApplicationJSONActionEnum {
    End = "end"
}
export declare class WebinarStatusApplicationJSON extends SpeakeasyBase {
    action?: WebinarStatusApplicationJSONActionEnum;
}
export declare class WebinarStatusRequest extends SpeakeasyBase {
    requestBody: WebinarStatusApplicationJSON;
    /**
     * The webinar ID in "**long**" format(represented as int64 data type in JSON).
     */
    webinarId: number;
}
export declare class WebinarStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
