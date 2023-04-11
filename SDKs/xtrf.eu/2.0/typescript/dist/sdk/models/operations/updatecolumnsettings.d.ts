import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateColumnSettingsRequest extends SpeakeasyBase {
    /**
     * Updated column's specific settings.
     */
    requestBody: Record<string, any>;
    /**
     * column's name
     */
    columnName: string;
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class UpdateColumnSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateColumnSettingsDefaultApplicationVndXtrfV1PlusJsonObject?: Record<string, any>;
}
