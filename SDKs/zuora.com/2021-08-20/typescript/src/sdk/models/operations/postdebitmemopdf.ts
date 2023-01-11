import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostDebitMemoPdfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debitMemoId" })
  debitMemoId: string;
}


export class PostDebitMemoPdfHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostDebitMemoPdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDebitMemoPdfPathParams;

  @SpeakeasyMetadata()
  headers: PostDebitMemoPdfHeaders;
}


export class PostDebitMemoPdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postMemoPdfResponse?: shared.PostMemoPdfResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
