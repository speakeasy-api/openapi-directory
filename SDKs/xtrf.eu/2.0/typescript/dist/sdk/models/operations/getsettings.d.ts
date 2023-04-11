import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingsRequest extends SpeakeasyBase {
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class GetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    settingsDTO?: shared.SettingsDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
