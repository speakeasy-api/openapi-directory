import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostPaymentMethodResponseReasons
/** 
 * Error information. Only applicable if the payment method was not created.
 * 
**/
export class PostPaymentMethodResponseReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostPaymentMethodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: PostPaymentMethodResponseReasons })
  reasons?: PostPaymentMethodResponseReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
