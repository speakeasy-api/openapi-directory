import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRefundPartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refundId" })
  refundId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refundpartid" })
  refundpartid: string;
}


export class GetRefundPartHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRefundPartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRefundPartPathParams;

  @SpeakeasyMetadata()
  headers: GetRefundPartHeaders;
}


export class GetRefundPartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  refundPartResponseType?: shared.RefundPartResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
