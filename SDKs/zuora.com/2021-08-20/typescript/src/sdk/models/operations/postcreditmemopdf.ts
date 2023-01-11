import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCreditMemoPdfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;
}


export class PostCreditMemoPdfHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PostCreditMemoPdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCreditMemoPdfPathParams;

  @SpeakeasyMetadata()
  headers: PostCreditMemoPdfHeaders;
}


export class PostCreditMemoPdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  postMemoPdfResponse?: shared.PostMemoPdfResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
