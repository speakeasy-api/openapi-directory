import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionPosTsubscribeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" })
  rejectUnknownFields?: boolean;
}


export class ActionPosTsubscribeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Zuora-WSDL-Version" })
  xZuoraWSDLVersion?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ActionPosTsubscribeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ActionPosTsubscribeQueryParams;

  @SpeakeasyMetadata()
  headers: ActionPosTsubscribeHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProxyActionsubscribeRequest;
}


export class ActionPosTsubscribeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SubscribeResult })
  subscribeResults?: shared.SubscribeResult[];
}
