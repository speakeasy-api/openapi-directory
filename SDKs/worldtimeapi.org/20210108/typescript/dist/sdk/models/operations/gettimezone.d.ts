import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTimezoneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * the list of available timezones in JSON format
     */
    listJsonResponse?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
