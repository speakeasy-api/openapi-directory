import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostEmailDebitMemoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debitMemoId" })
  debitMemoId: string;
}


export class PostEmailDebitMemoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostEmailDebitMemoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostEmailDebitMemoPathParams;

  @SpeakeasyMetadata()
  headers: PostEmailDebitMemoHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PostDebitMemoEmailType;
}


export class PostEmailDebitMemoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commonResponseType?: shared.CommonResponseType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
