import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUploadFileForInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;
}


export class PostUploadFileForInvoiceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostUploadFileForInvoiceRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class PostUploadFileForInvoiceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: PostUploadFileForInvoiceRequestBodyFile;
}


export class PostUploadFileForInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostUploadFileForInvoicePathParams;

  @SpeakeasyMetadata()
  headers: PostUploadFileForInvoiceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostUploadFileForInvoiceRequestBody;
}


export class PostUploadFileForInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postUploadFileResponse?: shared.PostUploadFileResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
