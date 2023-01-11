import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetPaymentMethodTypeCardHolderInfo
/** 
 * Container for the name and billing address for the card holder.
 * 
**/
export class GetPaymentMethodTypeCardHolderInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=cardHolderName" })
  cardHolderName?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=zipCode" })
  zipCode?: string;
}


export class GetPaymentMethodType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cardHolderInfo" })
  cardHolderInfo?: GetPaymentMethodTypeCardHolderInfo;

  @SpeakeasyMetadata({ data: "json, name=cardNumber" })
  cardNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=cardType" })
  cardType?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultPaymentMethod" })
  defaultPaymentMethod?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expirationMonth" })
  expirationMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=expirationYear" })
  expirationYear?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
