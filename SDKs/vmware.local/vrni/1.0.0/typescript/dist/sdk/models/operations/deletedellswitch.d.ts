import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeleteDellSwitchRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DeleteDellSwitchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
