import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUcsManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetUcsManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetUcsManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    switchDataSource?: shared.SwitchDataSource;
}
