import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PutVerifyPaymentMethodTypeGatewayOptions
/** 
 * The field used to pass gateway-specific parameters and parameter values.
 * 
**/
export class PutVerifyPaymentMethodTypeGatewayOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class PutVerifyPaymentMethodType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayOptions" })
  gatewayOptions?: PutVerifyPaymentMethodTypeGatewayOptions;

  @SpeakeasyMetadata({ data: "json, name=paymentGatewayName" })
  paymentGatewayName?: string;

  @SpeakeasyMetadata({ data: "json, name=securityCode" })
  securityCode?: string;
}
