import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDellSwitchSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
export declare class GetDellSwitchRequest extends SpeakeasyBase {
    /**
     * entity id
     */
    id: string;
}
export declare class GetDellSwitchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    dellSwitchDataSource?: shared.DellSwitchDataSource;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
