import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutOrderLineItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class PutOrderLineItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutOrderLineItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutOrderLineItemPathParams;

  @SpeakeasyMetadata()
  headers: PutOrderLineItemHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OrderLineItemCommon;
}


export class PutOrderLineItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putOrderLineItemResponseType?: shared.PutOrderLineItemResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
