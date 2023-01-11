import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutOrderTriggerDatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=orderNumber" })
  orderNumber: string;
}


export class PutOrderTriggerDatesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutOrderTriggerDatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutOrderTriggerDatesPathParams;

  @SpeakeasyMetadata()
  headers: PutOrderTriggerDatesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutOrderActionTriggerDatesRequestType;
}


export class PutOrderTriggerDatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putOrderTriggerDatesResponseType?: shared.PutOrderTriggerDatesResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
