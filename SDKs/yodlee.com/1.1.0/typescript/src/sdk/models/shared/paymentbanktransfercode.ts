import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PaymentBankTransferCodeTypeEnum {
    RoutingNumber = "ROUTING_NUMBER",
    Bsb = "BSB",
    Ifsc = "IFSC",
    SortCode = "SORT_CODE"
}


export class PaymentBankTransferCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PaymentBankTransferCodeTypeEnum;
}
