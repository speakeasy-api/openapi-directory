import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetHpovManagerSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetHpovManagerRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetHpovManagerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    switchDataSource?: shared.SwitchDataSource;
}
