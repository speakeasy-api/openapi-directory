import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUploadFileForCreditMemoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;
}


export class PostUploadFileForCreditMemoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostUploadFileForCreditMemoRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostUploadFileForCreditMemoRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: PostUploadFileForCreditMemoRequestBodyFile;
}


export class PostUploadFileForCreditMemoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUploadFileForCreditMemoPathParams;

  @SpeakeasyMetadata()
  headers: PostUploadFileForCreditMemoHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostUploadFileForCreditMemoRequestBody;
}


export class PostUploadFileForCreditMemoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postUploadFileResponse?: shared.PostUploadFileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
