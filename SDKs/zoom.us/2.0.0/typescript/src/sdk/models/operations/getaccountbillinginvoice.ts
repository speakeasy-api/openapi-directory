import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAccountBillingInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;
}


export class GetAccountBillingInvoice200ApplicationJsonInvoiceItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=charge_name" })
  chargeName?: string;

  @SpeakeasyMetadata({ data: "json, name=charge_number" })
  chargeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=charge_type" })
  chargeType?: string;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=tax_amount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=total_amount" })
  totalAmount?: number;
}


export class GetAccountBillingInvoice200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=due_date" })
  dueDate?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_date" })
  invoiceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=invoice_items", elemType: GetAccountBillingInvoice200ApplicationJsonInvoiceItems })
  invoiceItems?: GetAccountBillingInvoice200ApplicationJsonInvoiceItems[];

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


export class GetAccountBillingInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountBillingInvoicePathParams;
}


export class GetAccountBillingInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAccountBillingInvoice200ApplicationJSONObject?: GetAccountBillingInvoice200ApplicationJson;
}
