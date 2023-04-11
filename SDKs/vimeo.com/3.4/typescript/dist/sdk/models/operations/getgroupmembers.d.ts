import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The sort direction of the results.
 */
export declare enum GetGroupMembersDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * The attribute by which to filter the results.
 */
export declare enum GetGroupMembersFilterEnum {
    Moderators = "moderators"
}
/**
 * The way to sort the results.
 */
export declare enum GetGroupMembersSortEnum {
    Alphabetical = "alphabetical",
    Date = "date"
}
export declare class GetGroupMembersRequest extends SpeakeasyBase {
    /**
     * The sort direction of the results.
     */
    direction?: GetGroupMembersDirectionEnum;
    /**
     * The attribute by which to filter the results.
     */
    filter?: GetGroupMembersFilterEnum;
    /**
     * The ID of the group.
     */
    groupId: number;
    /**
     * The page number of the results to show.
     */
    page?: number;
    /**
     * The number of items to show on each page of results, up to a maximum of 100.
     */
    perPage?: number;
    /**
     * The search query to use to filter the results.
     */
    query?: string;
    /**
     * The way to sort the results.
     */
    sort?: GetGroupMembersSortEnum;
}
export declare class GetGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * No such group exists.
     */
    legacyError?: shared.LegacyError;
    /**
     * The members were returned.
     */
    users?: shared.User[];
}
