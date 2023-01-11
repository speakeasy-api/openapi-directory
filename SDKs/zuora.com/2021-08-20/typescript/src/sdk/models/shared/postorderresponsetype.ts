import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostOrderResponseTypeOrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemNumber" })
  itemNumber?: string;
}


export class PostOrderResponseTypeRamps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rampNumber" })
  rampNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


export class PostOrderResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum PostOrderResponseTypeStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}

export enum PostOrderResponseTypeSubscriptionsStatusEnum {
    Active = "Active",
    PendingActivation = "Pending Activation",
    PendingAcceptance = "Pending Acceptance",
    Cancelled = "Cancelled",
    Suspended = "Suspended"
}


export class PostOrderResponseTypeSubscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PostOrderResponseTypeSubscriptionsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


export class PostOrderResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=creditMemoIds" })
  creditMemoIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=creditMemoNumbers" })
  creditMemoNumbers?: string[];

  @SpeakeasyMetadata({ data: "json, name=invoiceIds" })
  invoiceIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=invoiceNumbers" })
  invoiceNumbers?: string[];

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: PostOrderResponseTypeOrderLineItems })
  orderLineItems?: PostOrderResponseTypeOrderLineItems[];

  @SpeakeasyMetadata({ data: "json, name=orderNumber" })
  orderNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=paidAmount" })
  paidAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentNumber" })
  paymentNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=ramps", elemType: PostOrderResponseTypeRamps })
  ramps?: PostOrderResponseTypeRamps[];

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: PostOrderResponseTypeReasons })
  reasons?: PostOrderResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PostOrderResponseTypeStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptionIds" })
  subscriptionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumbers" })
  subscriptionNumbers?: string[];

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: PostOrderResponseTypeSubscriptions })
  subscriptions?: PostOrderResponseTypeSubscriptions[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
