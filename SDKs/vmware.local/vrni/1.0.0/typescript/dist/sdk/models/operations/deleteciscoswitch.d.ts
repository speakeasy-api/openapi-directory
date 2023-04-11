import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCiscoSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeleteCiscoSwitchRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DeleteCiscoSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
