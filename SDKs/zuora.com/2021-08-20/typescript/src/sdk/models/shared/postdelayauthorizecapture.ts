import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PostDelayAuthorizeCaptureMitTransactionSourceEnum {
    CUnscheduled = "C_Unscheduled",
    MRecurring = "M_Recurring",
    MUnscheduled = "M_Unscheduled"
}


export class PostDelayAuthorizeCapture extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: number;

  @SpeakeasyMetadata({ data: "json, name=gatewayOrderId" })
  gatewayOrderId: string;

  @SpeakeasyMetadata({ data: "json, name=mitTransactionSource" })
  mitTransactionSource?: PostDelayAuthorizeCaptureMitTransactionSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=softDescriptor" })
  softDescriptor?: string;

  @SpeakeasyMetadata({ data: "json, name=softDescriptorPhone" })
  softDescriptorPhone?: string;
}
