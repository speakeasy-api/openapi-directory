import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionPosTamendQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" })
  rejectUnknownFields?: boolean;
}


export class ActionPosTamendHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Zuora-WSDL-Version" })
  xZuoraWSDLVersion?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ActionPosTamendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ActionPosTamendQueryParams;

  @SpeakeasyMetadata()
  headers: ActionPosTamendHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProxyActionamendRequest;
}


export class ActionPosTamendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyActionamendResponse?: shared.ProxyActionamendResponse;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
