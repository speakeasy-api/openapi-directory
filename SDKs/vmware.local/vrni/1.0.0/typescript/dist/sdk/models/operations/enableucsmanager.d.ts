import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnableUcsManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class EnableUcsManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class EnableUcsManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
