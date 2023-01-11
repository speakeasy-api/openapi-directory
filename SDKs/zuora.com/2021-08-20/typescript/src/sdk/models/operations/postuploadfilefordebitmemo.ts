import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUploadFileForDebitMemoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debitMemoId" })
  debitMemoId: string;
}


export class PostUploadFileForDebitMemoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostUploadFileForDebitMemoRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostUploadFileForDebitMemoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: PostUploadFileForDebitMemoRequestBodyFile;
}


export class PostUploadFileForDebitMemoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUploadFileForDebitMemoPathParams;

  @SpeakeasyMetadata()
  headers: PostUploadFileForDebitMemoHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostUploadFileForDebitMemoRequestBody;
}


export class PostUploadFileForDebitMemoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postUploadFileResponse?: shared.PostUploadFileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
