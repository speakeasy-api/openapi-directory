import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class DeleteHpovManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class DeleteHpovManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
