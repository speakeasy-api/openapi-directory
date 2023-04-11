import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnableHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class EnableHpovManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class EnableHpovManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
