import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutWriteOffInvoiceResponseCreditMemo
/** 
 * Container for the credit memo that is automatically generated when writing off invoices.
 * 
**/
export class PutWriteOffInvoiceResponseCreditMemo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class PutWriteOffInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditMemo" })
  creditMemo?: PutWriteOffInvoiceResponseCreditMemo;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
