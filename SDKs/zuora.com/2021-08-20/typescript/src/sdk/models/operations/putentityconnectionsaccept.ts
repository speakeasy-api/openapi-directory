import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEntityConnectionsAcceptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection-id" })
  connectionId: string;
}


export class PutEntityConnectionsAcceptHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutEntityConnectionsAcceptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEntityConnectionsAcceptPathParams;

  @SpeakeasyMetadata()
  headers: PutEntityConnectionsAcceptHeaders;
}


export class PutEntityConnectionsAcceptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putEntityConnectionsAcceptResponseType?: shared.PutEntityConnectionsAcceptResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
