import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DisableHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DisableHpovManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DisableHpovManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
