import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRefundPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refundId" })
  refundId: string;
}


export class GetRefundHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRefundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRefundPathParams;

  @SpeakeasyMetadata()
  headers: GetRefundHeaders;
}


export class GetRefundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRefundType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
