import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMassUpdaterHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostMassUpdaterRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostMassUpdaterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: PostMassUpdaterRequestBodyFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=params" })
  params: string;
}


export class PostMassUpdaterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostMassUpdaterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostMassUpdaterRequestBody;
}


export class PostMassUpdaterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postMassUpdateResponseType?: shared.PostMassUpdateResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
