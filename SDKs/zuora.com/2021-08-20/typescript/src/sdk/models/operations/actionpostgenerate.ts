import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionPosTgenerateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rejectUnknownFields" })
  rejectUnknownFields?: boolean;
}


export class ActionPosTgenerateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Zuora-WSDL-Version" })
  xZuoraWSDLVersion?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class ActionPosTgenerateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ActionPosTgenerateQueryParams;

  @SpeakeasyMetadata()
  headers: ActionPosTgenerateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProxyActiongenerateRequest;
}


export class ActionPosTgenerateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  proxyUnauthorizedResponse?: shared.ProxyUnauthorizedResponse;

  @SpeakeasyMetadata({ elemType: shared.SaveResult })
  saveResults?: shared.SaveResult[];

  @SpeakeasyMetadata()
  statusCode: number;
}
