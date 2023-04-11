import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetColumnSettingsRequest extends SpeakeasyBase {
    /**
     * column's name
     */
    columnName: string;
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class GetColumnSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getColumnSettingsDefaultApplicationVndXtrfV1PlusJsonObject?: Record<string, any>;
}
