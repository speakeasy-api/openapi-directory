import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventTriggersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=active" })
  active?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=baseObject" })
  baseObject?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventTypeName" })
  eventTypeName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetEventTriggersHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetEventTriggers200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.EventTrigger })
  data?: shared.EventTrigger[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class GetEventTriggersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventTriggersQueryParams;

  @SpeakeasyMetadata()
  headers: GetEventTriggersHeaders;
}


export class GetEventTriggersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  getEventTriggers200ApplicationJSONObject?: GetEventTriggers200ApplicationJson;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
