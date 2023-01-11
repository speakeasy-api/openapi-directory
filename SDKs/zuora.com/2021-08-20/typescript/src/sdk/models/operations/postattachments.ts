import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAttachmentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=associatedObjectKey" })
  associatedObjectKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=associatedObjectType" })
  associatedObjectType: shared.GlobalHeaderZuoraEntityIdsSingleEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;
}


export class PostAttachmentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostAttachmentsRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostAttachmentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file: PostAttachmentsRequestBodyFile;
}


export class PostAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostAttachmentsQueryParams;

  @SpeakeasyMetadata()
  headers: PostAttachmentsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostAttachmentsRequestBody;
}


export class PostAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postAttachmentResponseType?: shared.PostAttachmentResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
