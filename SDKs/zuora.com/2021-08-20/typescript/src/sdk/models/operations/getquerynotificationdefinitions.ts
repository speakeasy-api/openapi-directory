import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQueryNotificationDefinitionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=emailTemplateId" })
  emailTemplateId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventTypeName" })
  eventTypeName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetQueryNotificationDefinitionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetQueryNotificationDefinitions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.GetPublicNotificationDefinitionResponse })
  data?: shared.GetPublicNotificationDefinitionResponse[];

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;
}


export class GetQueryNotificationDefinitionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryNotificationDefinitionsQueryParams;

  @SpeakeasyMetadata()
  headers: GetQueryNotificationDefinitionsHeaders;
}


export class GetQueryNotificationDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  getQueryNotificationDefinitions200ApplicationJSONObject?: GetQueryNotificationDefinitions200ApplicationJson;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
