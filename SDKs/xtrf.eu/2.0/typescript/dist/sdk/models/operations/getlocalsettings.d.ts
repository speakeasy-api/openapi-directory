import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLocalSettingsRequest extends SpeakeasyBase {
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class GetLocalSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    localSettingsDTO?: shared.LocalSettingsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
