import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    subscribe201ApplicationVndXtrfV1PlusJsonString?: string;
    /**
     * Success
     */
    subscribe409ApplicationVndXtrfV1PlusJsonString?: string;
}
