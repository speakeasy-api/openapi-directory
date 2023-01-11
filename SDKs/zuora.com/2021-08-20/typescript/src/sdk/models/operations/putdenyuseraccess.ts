import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutDenyUserAccessPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PutDenyUserAccessHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutDenyUserAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDenyUserAccessPathParams;

  @SpeakeasyMetadata()
  headers: PutDenyUserAccessHeaders;
}


export class PutDenyUserAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putDenyUserAccessResponseType?: shared.PutDenyUserAccessResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
