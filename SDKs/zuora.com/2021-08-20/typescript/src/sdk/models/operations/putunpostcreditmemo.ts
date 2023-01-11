import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutUnpostCreditMemoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;
}


export class PutUnpostCreditMemoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutUnpostCreditMemoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUnpostCreditMemoPathParams;

  @SpeakeasyMetadata()
  headers: PutUnpostCreditMemoHeaders;
}


export class PutUnpostCreditMemoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
