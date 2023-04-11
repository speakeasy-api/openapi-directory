import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTimezoneAreaTxtRequest extends SpeakeasyBase {
    area: string;
}
export declare class GetTimezoneAreaTxtResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * an error response in plain text
     */
    errorTextResponse?: string;
    /**
     * the list of available timezones in plain text
     */
    listTextResponse?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
