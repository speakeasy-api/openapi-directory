import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EvaluateAccountAddressTypeEnum {
    Home = "HOME",
    Business = "BUSINESS",
    Pobox = "POBOX",
    Retail = "RETAIL",
    Office = "OFFICE",
    SmallBusiness = "SMALL_BUSINESS",
    Communication = "COMMUNICATION",
    Permanent = "PERMANENT",
    StatementAddress = "STATEMENT_ADDRESS",
    Payment = "PAYMENT",
    Payoff = "PAYOFF",
    Unknown = "UNKNOWN"
}


export class EvaluateAccountAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceType" })
  sourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: EvaluateAccountAddressTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
