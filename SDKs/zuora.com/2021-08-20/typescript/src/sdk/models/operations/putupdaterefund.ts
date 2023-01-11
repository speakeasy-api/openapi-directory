import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutUpdateRefundPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refundId" })
  refundId: string;
}


export class PutUpdateRefundHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutUpdateRefundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUpdateRefundPathParams;

  @SpeakeasyMetadata()
  headers: PutUpdateRefundHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PutUpdateRefundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRefundType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
