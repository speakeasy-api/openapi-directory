import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDebitMemoApplicationPartsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debitMemoId" })
  debitMemoId: string;
}


export class GetDebitMemoApplicationPartsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetDebitMemoApplicationPartsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDebitMemoApplicationPartsPathParams;

  @SpeakeasyMetadata()
  headers: GetDebitMemoApplicationPartsHeaders;
}


export class GetDebitMemoApplicationPartsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDebitMemoApplicationPartCollectionType?: shared.GetDebitMemoApplicationPartCollectionType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
