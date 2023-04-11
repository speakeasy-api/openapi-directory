import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisableHpvcManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DisableHpvcManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DisableHpvcManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
