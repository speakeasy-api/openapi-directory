import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountBillingInvoicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class AccountBillingInvoicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;
}


export class AccountBillingInvoices200ApplicationJsonInvoices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_date" })
  invoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_number" })
  invoiceNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=target_date" })
  targetDate?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_amount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;
}


export class AccountBillingInvoices200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: AccountBillingInvoices200ApplicationJsonInvoices })
  invoices?: AccountBillingInvoices200ApplicationJsonInvoices[];
}


export class AccountBillingInvoicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountBillingInvoicesPathParams;

  @SpeakeasyMetadata()
  queryParams: AccountBillingInvoicesQueryParams;
}


export class AccountBillingInvoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountBillingInvoices200ApplicationJSONObject?: AccountBillingInvoices200ApplicationJson;
}
