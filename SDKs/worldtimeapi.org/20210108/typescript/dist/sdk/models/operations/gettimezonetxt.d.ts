import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTimezoneTxtResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * the list of available timezones in plain text
     */
    listTextResponse?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
