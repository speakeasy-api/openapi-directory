import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BrowseJSONRequest extends SpeakeasyBase {
    additionalOrder?: string;
    /**
     * overrides view's default rows limit, supported values 10 to 1000
     */
    maxRows?: number;
    page?: number;
    useDeferredColumns?: string;
    /**
     * view's identifier
     */
    viewId?: number;
}
export declare class BrowseJSONResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    browseJSONDefaultApplicationVndXtrfV1PlusJSONObject?: Record<string, any>;
}
