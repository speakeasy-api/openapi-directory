import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutUpdateCreditMemoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;
}


export class PutUpdateCreditMemoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutUpdateCreditMemoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUpdateCreditMemoPathParams;

  @SpeakeasyMetadata()
  headers: PutUpdateCreditMemoHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, any>;
}


export class PutUpdateCreditMemoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
