import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutCancelDebitMemoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debitMemoId" })
  debitMemoId: string;
}


export class PutCancelDebitMemoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class PutCancelDebitMemoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCancelDebitMemoPathParams;

  @SpeakeasyMetadata()
  headers: PutCancelDebitMemoHeaders;
}


export class PutCancelDebitMemoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDebitMemoType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
