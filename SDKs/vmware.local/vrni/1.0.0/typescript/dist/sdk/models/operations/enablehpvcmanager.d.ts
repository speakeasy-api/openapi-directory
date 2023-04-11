import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnableHpvcManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class EnableHpvcManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class EnableHpvcManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
