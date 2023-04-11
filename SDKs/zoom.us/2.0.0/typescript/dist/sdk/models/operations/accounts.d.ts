import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccountsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     *
     * @remarks
     * **Deprecated** - This field has been deprecated and we will stop supporting it completely in a future release. Please use "next_page_token" for pagination instead of this field.
     *
     * The page number of the current page in the returned records.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
export declare class AccountsAccountListAccounts extends SpeakeasyBase {
    /**
     * Account name.
     */
    accountName?: string;
    /**
     * Account Number of the account.
     */
    accountNumber?: string;
    /**
     * Account type.
     */
    accountType?: string;
    /**
     * Account creation date and time.
     */
    createdAt?: Date;
    /**
     * Account ID.
     */
    id?: string;
    /**
     * Account owner email.
     */
    ownerEmail?: string;
    /**
     * Account seats.
     */
    seats?: number;
    /**
     * Account subscription end date and time.
     */
    subscriptionEndTime?: Date;
    /**
     * Account subscription start date and time.
     */
    subscriptionStartTime?: Date;
}
/**
 * Account object in the account list.
 */
export declare class AccountsAccountList extends SpeakeasyBase {
    /**
     * List of Account objects.
     */
    accounts?: AccountsAccountListAccounts[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * **Deprecated**: This field has been deprecated. Please use the "next_page_token" field for pagination instead of this field.
     *
     * @remarks
     *
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
}
export declare class AccountsResponse extends SpeakeasyBase {
    /**
     * Account list returned.
     */
    accountList?: AccountsAccountList;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
