import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRefundItemPartsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refundId" })
  refundId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=refundpartid" })
  refundpartid: string;
}


export class GetRefundItemPartsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetRefundItemPartsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRefundItemPartsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRefundItemPartsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRefundItemPartsQueryParams;

  @SpeakeasyMetadata()
  headers: GetRefundItemPartsHeaders;
}


export class GetRefundItemPartsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRefundItemPartCollectionType?: shared.GetRefundItemPartCollectionType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
