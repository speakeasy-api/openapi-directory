import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSequenceSetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSequenceSetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutSequenceSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSequenceSetPathParams;

  @SpeakeasyMetadata()
  headers: PutSequenceSetHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PutSequenceSetRequest;
}


export class PutSequenceSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  putSequenceSetResponse?: shared.PutSequenceSetResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
