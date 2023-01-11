import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEntityConnectionsDisconnectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection-id" })
  connectionId: string;
}


export class PutEntityConnectionsDisconnectHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutEntityConnectionsDisconnectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEntityConnectionsDisconnectPathParams;

  @SpeakeasyMetadata()
  headers: PutEntityConnectionsDisconnectHeaders;
}


export class PutEntityConnectionsDisconnectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putEntityConnectionsDisconnectResponseType?: shared.PutEntityConnectionsDisconnectResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
