import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VerificationBankTransferCodeTypeEnum {
    Bsb = "BSB",
    Ifsc = "IFSC",
    RoutingNumber = "ROUTING_NUMBER",
    SortCode = "SORT_CODE"
}


export class VerificationBankTransferCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: VerificationBankTransferCodeTypeEnum;
}
