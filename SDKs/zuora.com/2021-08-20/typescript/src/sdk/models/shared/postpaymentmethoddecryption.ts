import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostPaymentMethodDecryptionCardHolderInfo
/** 
 * Container for cardholder information. If provided, Zuora will only use this information for this card. If not provided, Zuora will use the account's existing bill-to contact information for this card.
**/
export class PostPaymentMethodDecryptionCardHolderInfo extends SpeakeasyBase {
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

export enum PostPaymentMethodDecryptionMitConsentAgreementSrcEnum {
    External = "External"
}

export enum PostPaymentMethodDecryptionMitProfileActionEnum {
    Activate = "Activate",
    Persist = "Persist"
}

export enum PostPaymentMethodDecryptionMitProfileTypeEnum {
    Recurring = "Recurring"
}


export class PostPaymentMethodDecryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountID" })
  accountID?: string;

  @SpeakeasyMetadata({ data: "json, name=cardHolderInfo" })
  cardHolderInfo?: PostPaymentMethodDecryptionCardHolderInfo;

  @SpeakeasyMetadata({ data: "json, name=integrationType" })
  integrationType: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantID" })
  merchantID: string;

  @SpeakeasyMetadata({ data: "json, name=mitConsentAgreementSrc" })
  mitConsentAgreementSrc?: PostPaymentMethodDecryptionMitConsentAgreementSrcEnum;

  @SpeakeasyMetadata({ data: "json, name=mitProfileAction" })
  mitProfileAction?: PostPaymentMethodDecryptionMitProfileActionEnum;

  @SpeakeasyMetadata({ data: "json, name=mitProfileType" })
  mitProfileType?: PostPaymentMethodDecryptionMitProfileTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=paymentGateway" })
  paymentGateway?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentToken" })
  paymentToken: Record<string, any>;

  @SpeakeasyMetadata({ data: "json, name=processPayment" })
  processPayment?: boolean;
}
