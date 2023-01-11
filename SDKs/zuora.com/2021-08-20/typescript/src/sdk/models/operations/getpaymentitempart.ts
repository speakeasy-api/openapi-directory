import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentItemPartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itempartid" })
  itempartid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partid" })
  partid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=paymentId" })
  paymentId: string;
}


export class GetPaymentItemPartHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetPaymentItemPartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentItemPartPathParams;

  @SpeakeasyMetadata()
  headers: GetPaymentItemPartHeaders;
}


export class GetPaymentItemPartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPaymentItemPartType?: shared.GetPaymentItemPartType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
