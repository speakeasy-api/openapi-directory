import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobResultOrderLineItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=itemNumber" })
  itemNumber?: string;
}


export class JobResultRamps extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rampNumber" })
  rampNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


export class JobResultReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}

export enum JobResultStatusEnum {
    Completed = "Completed",
    Pending = "Pending"
}

export enum JobResultSubscriptionsStatusEnum {
    Active = "Active",
    PendingActivation = "Pending Activation",
    PendingAcceptance = "Pending Acceptance",
    Cancelled = "Cancelled"
}


export class JobResultSubscriptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobResultSubscriptionsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumber" })
  subscriptionNumber?: string;
}


// JobResult
/** 
 * **Note:** The schema of the `result` nested field is the same as the response body schema of either the ["Create an order"](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or the ["Preview an order"](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation, depending on the purpose of the job.
 * 
 * The following schema for the nested `result` field is defined as the response body schema of "Create an order". See [Preview an Order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) for the response body schema of "Preview an order". 
 * 
**/
export class JobResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=creditMemoIds" })
  creditMemoIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=creditMemoNumbers" })
  creditMemoNumbers?: string[];

  @SpeakeasyMetadata({ data: "json, name=invoiceId" })
  invoiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceNumbers" })
  invoiceNumbers?: string[];

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderLineItems", elemType: JobResultOrderLineItems })
  orderLineItems?: JobResultOrderLineItems[];

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

  @SpeakeasyMetadata({ data: "json, name=ramps", elemType: JobResultRamps })
  ramps?: JobResultRamps[];

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: JobResultReasons })
  reasons?: JobResultReasons[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobResultStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=subscriptionIds" })
  subscriptionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=subscriptionNumbers" })
  subscriptionNumbers?: string[];

  @SpeakeasyMetadata({ data: "json, name=subscriptions", elemType: JobResultSubscriptions })
  subscriptions?: JobResultSubscriptions[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
