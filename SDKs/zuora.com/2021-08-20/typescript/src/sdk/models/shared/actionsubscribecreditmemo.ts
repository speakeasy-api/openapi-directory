import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionSubscribeCreditMemo
/** 
 * Container for credit memos.
 * 
 * **Note**: This field is only available if you have the Invoice Settlement feature enabled and set the `X-Zuora-WSDL-Version` request header to `107` or later.
 * 
**/
export class ActionSubscribeCreditMemo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmount" })
  totalAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalAmountWithoutTax" })
  totalAmountWithoutTax?: number;
}
