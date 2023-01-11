import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DebitMemoCollectRequestPayment
/** 
 * Some detail info that would be used to processed an electronic payment.
 * The info would only effect when `collect` set to `true`.
 * 
**/
export class DebitMemoCollectRequestPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;
}


export class DebitMemoCollectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationOrder" })
  applicationOrder?: string[];

  @SpeakeasyMetadata({ data: "json, name=applyCredit" })
  applyCredit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collect" })
  collect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=payment" })
  payment?: DebitMemoCollectRequestPayment;
}
