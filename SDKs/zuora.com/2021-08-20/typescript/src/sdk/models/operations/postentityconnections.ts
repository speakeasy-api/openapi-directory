import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostEntityConnectionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostEntityConnectionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostEntityConnectionsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PostEntityConnectionsType;
}


export class PostEntityConnectionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postEntityConnectionsResponseType?: shared.PostEntityConnectionsResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
