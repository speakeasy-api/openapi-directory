import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetListUsersRequest extends SpeakeasyBase {
    /**
     * The media type of the body of the request. Default value for license manager protocol is application/json
     */
    contentType: string;
    /**
     * Number of items in the returned page
     */
    numItems?: number;
    /**
     * Which page from the whole list will be returned
     */
    pageNumber?: number;
    /**
     * Chooses the field that the list will be sorted by
     */
    sort?: string;
    /**
     * Defines the sorting order. `ASC` is used for ascendant order. `DSC` is used for descendant order
     */
    sortType?: string;
}
export declare class GetListUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listUsersResponse?: shared.ListUsersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
