import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSendUserAccessRequestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PutSendUserAccessRequestsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutSendUserAccessRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSendUserAccessRequestsPathParams;

  @SpeakeasyMetadata()
  headers: PutSendUserAccessRequestsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PutSendUserAccessRequestType;
}


export class PutSendUserAccessRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putSendUserAccessRequestResponseType?: shared.PutSendUserAccessRequestResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
