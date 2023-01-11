import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageNumber?: number;
    pageSize?: number;
}
export declare class AccountsAccountListAccounts extends SpeakeasyBase {
    accountName?: string;
    accountNumber?: string;
    accountType?: string;
    createdAt?: Date;
    id?: string;
    ownerEmail?: string;
    seats?: number;
    subscriptionEndTime?: Date;
    subscriptionStartTime?: Date;
}
/**
 * Account object in the account list.
**/
export declare class AccountsAccountList extends SpeakeasyBase {
    accounts?: AccountsAccountListAccounts[];
    nextPageToken?: string;
    pageCount?: number;
    pageNumber?: number;
    pageSize?: number;
    totalRecords?: number;
}
export declare class AccountsRequest extends SpeakeasyBase {
    queryParams: AccountsQueryParams;
}
export declare class AccountsResponse extends SpeakeasyBase {
    accountList?: AccountsAccountList;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
