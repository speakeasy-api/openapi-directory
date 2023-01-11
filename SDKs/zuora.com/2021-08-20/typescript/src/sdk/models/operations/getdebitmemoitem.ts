import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDebitMemoItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debitMemoId" })
  debitMemoId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dmitemid" })
  dmitemid: string;
}


export class GetDebitMemoItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class GetDebitMemoItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDebitMemoItemPathParams;

  @SpeakeasyMetadata()
  headers: GetDebitMemoItemHeaders;
}


export class GetDebitMemoItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDebitMemoItemType?: Record<string, any>;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
