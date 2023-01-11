import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetaPaymentGatwayResponse } from "./getapaymentgatwayresponse";



export class GetPaymentGatwaysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paymentgateways", elemType: GetaPaymentGatwayResponse })
  paymentgateways?: GetaPaymentGatwayResponse[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
