import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutEntityConnectionsDenyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=connection-id" })
  connectionId: string;
}


export class PutEntityConnectionsDenyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutEntityConnectionsDenyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutEntityConnectionsDenyPathParams;

  @SpeakeasyMetadata()
  headers: PutEntityConnectionsDenyHeaders;
}


export class PutEntityConnectionsDenyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putEntityConnectionsDenyResponseType?: shared.PutEntityConnectionsDenyResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
