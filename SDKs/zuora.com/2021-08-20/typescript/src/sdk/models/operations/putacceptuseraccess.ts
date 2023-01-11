import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAcceptUserAccessPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class PutAcceptUserAccessHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutAcceptUserAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAcceptUserAccessPathParams;

  @SpeakeasyMetadata()
  headers: PutAcceptUserAccessHeaders;
}


export class PutAcceptUserAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putAcceptUserAccessResponseType?: shared.PutAcceptUserAccessResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
