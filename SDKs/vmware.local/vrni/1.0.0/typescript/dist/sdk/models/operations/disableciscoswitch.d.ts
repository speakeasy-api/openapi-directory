import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisableCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DisableCiscoSwitchRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DisableCiscoSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
