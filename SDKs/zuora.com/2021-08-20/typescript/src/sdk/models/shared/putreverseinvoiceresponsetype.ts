import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutReverseInvoiceResponseTypeCreditMemo
/** 
 * Container for the credit memo that is auto-generated when reversing invoices.
 * 
**/
export class PutReverseInvoiceResponseTypeCreditMemo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class PutReverseInvoiceResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creditMemo" })
  creditMemo?: PutReverseInvoiceResponseTypeCreditMemo;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
