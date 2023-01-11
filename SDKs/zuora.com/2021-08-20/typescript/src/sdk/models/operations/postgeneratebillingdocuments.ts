import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostGenerateBillingDocumentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostGenerateBillingDocumentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostGenerateBillingDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostGenerateBillingDocumentsPathParams;

  @SpeakeasyMetadata()
  headers: PostGenerateBillingDocumentsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostGenerateBillingDocumentType;
}


export class PostGenerateBillingDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  generateBillingDocumentResponseType?: shared.GenerateBillingDocumentResponseType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
