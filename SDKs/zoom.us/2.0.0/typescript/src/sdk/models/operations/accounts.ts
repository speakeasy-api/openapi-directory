import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class AccountsAccountListAccounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_name" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=account_number" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=account_type" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_email" })
  ownerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=seats" })
  seats?: number;

  @SpeakeasyMetadata({ data: "json, name=subscription_end_time" })
  subscriptionEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=subscription_start_time" })
  subscriptionStartTime?: Date;
}


// AccountsAccountList
/** 
 * Account object in the account list.
**/
export class AccountsAccountList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: AccountsAccountListAccounts })
  accounts?: AccountsAccountListAccounts[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class AccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AccountsQueryParams;
}


export class AccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountList?: AccountsAccountList;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
