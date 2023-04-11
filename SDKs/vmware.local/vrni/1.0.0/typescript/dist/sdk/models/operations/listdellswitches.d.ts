import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDellSwitchesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    dataSourceListResponse?: shared.DataSourceListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
