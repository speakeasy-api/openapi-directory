import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisableDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DisableDellSwitchRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DisableDellSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
