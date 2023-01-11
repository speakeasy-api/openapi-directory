import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDebitMemoCollectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debitMemoId" })
  debitMemoId: string;
}


export class PostDebitMemoCollectHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedAmount" })
  appliedAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=unappliedAmount" })
  unappliedAmount?: number;
}


export class PostDebitMemoCollect200ApplicationJsonAppliedPayments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedAmount" })
  appliedAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=unappliedAmount" })
  unappliedAmount?: number;
}


// PostDebitMemoCollect200ApplicationJsonDebitMemo
/** 
 * The information about the debit memo that just collected.
 * 
**/
export class PostDebitMemoCollect200ApplicationJsonDebitMemo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;
}

export enum PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum {
    Processing = "Processing",
    Processed = "Processed",
    Error = "Error",
    Canceled = "Canceled"
}


// PostDebitMemoCollect200ApplicationJsonProcessedPayment
/** 
 * The information about the payment that newly processed to the debit memo.
 * 
**/
export class PostDebitMemoCollect200ApplicationJsonProcessedPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=gatewayId" })
  gatewayId?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponse" })
  gatewayResponse?: string;

  @SpeakeasyMetadata({ data: "json, name=gatewayResponseCode" })
  gatewayResponseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethodId" })
  paymentMethodId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PostDebitMemoCollect200ApplicationJsonProcessedPaymentStatusEnum;
}


export class PostDebitMemoCollect200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedCreditMemos", elemType: PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos })
  appliedCreditMemos?: PostDebitMemoCollect200ApplicationJsonAppliedCreditMemos[];

  @SpeakeasyMetadata({ data: "json, name=appliedPayments", elemType: PostDebitMemoCollect200ApplicationJsonAppliedPayments })
  appliedPayments?: PostDebitMemoCollect200ApplicationJsonAppliedPayments[];

  @SpeakeasyMetadata({ data: "json, name=debitMemo" })
  debitMemo?: PostDebitMemoCollect200ApplicationJsonDebitMemo;

  @SpeakeasyMetadata({ data: "json, name=processedPayment" })
  processedPayment?: PostDebitMemoCollect200ApplicationJsonProcessedPayment;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class PostDebitMemoCollectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDebitMemoCollectPathParams;

  @SpeakeasyMetadata()
  headers: PostDebitMemoCollectHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DebitMemoCollectRequest;
}


export class PostDebitMemoCollectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postDebitMemoCollect200ApplicationJSONObject?: PostDebitMemoCollect200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
