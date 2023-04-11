import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetFoldersSecurity extends SpeakeasyBase {
    oAuth2: string;
}
/**
 * values to sort by
 */
export declare enum GetFoldersSortEnum {
    Name = "Name",
    Size = "Size",
    CreatedDateUTC = "CreatedDateUTC"
}
export declare class GetFoldersRequest extends SpeakeasyBase {
    /**
     * values to sort by
     */
    sort?: GetFoldersSortEnum;
    /**
     * Xero identifier for Tenant
     */
    xeroTenantId: string;
}
export declare class GetFoldersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * search results matching criteria
     */
    folders?: shared.Folder[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
