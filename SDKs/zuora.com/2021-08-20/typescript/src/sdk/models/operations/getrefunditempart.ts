import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRefundItemPartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itempartid" })
  itempartid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refundId" })
  refundId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refundpartid" })
  refundpartid: string;
}


export class GetRefundItemPartHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRefundItemPartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRefundItemPartPathParams;

  @SpeakeasyMetadata()
  headers: GetRefundItemPartHeaders;
}


export class GetRefundItemPartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRefundItemPartType?: shared.GetRefundItemPartType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
