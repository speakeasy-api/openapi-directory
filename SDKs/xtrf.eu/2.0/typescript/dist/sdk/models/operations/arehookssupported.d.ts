import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AreHooksSupportedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    areHooksSupportedDefaultApplicationVndXtrfV1PlusJsonBoolean?: boolean;
}
