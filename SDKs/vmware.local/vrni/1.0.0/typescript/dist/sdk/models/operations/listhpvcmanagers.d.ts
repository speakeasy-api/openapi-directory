import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListHpvcManagersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
