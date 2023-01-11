import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutCancelCreditMemoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;
}


export class PutCancelCreditMemoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutCancelCreditMemoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCancelCreditMemoPathParams;

  @SpeakeasyMetadata()
  headers: PutCancelCreditMemoHeaders;
}


export class PutCancelCreditMemoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
