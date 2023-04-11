import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFilesSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * values to sort by
 */
export declare enum GetFilesSortEnum {
    Name = "Name",
    Size = "Size",
    CreatedDateUTC = "CreatedDateUTC"
}
export declare class GetFilesRequest extends SpeakeasyBase {
    /**
     * number of records to skip for pagination
     */
    page?: number;
    /**
     * pass an optional page size value
     */
    pagesize?: number;
    /**
     * values to sort by
     */
    sort?: GetFilesSortEnum;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetFilesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    files?: shared.Files;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
