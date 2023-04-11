import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BrowseCSVRequest extends SpeakeasyBase {
    additionalOrder?: string;
    /**
     * secondary csv field separator
     */
    secondarySeparator?: string;
    /**
     * csv field separator
     */
    separator?: string;
    /**
     * view's identifier
     */
    viewId?: number;
}
export declare class BrowseCSVResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    browseCSVDefaultApplicationVndXtrfV1PlusJsonObject?: Record<string, any>;
}
