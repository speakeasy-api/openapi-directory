import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCreditMemoPartPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partid" })
  partid: string;
}


export class GetCreditMemoPartHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetCreditMemoPartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreditMemoPartPathParams;

  @SpeakeasyMetadata()
  headers: GetCreditMemoPartHeaders;
}


export class GetCreditMemoPartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoPartType?: shared.GetCreditMemoPartType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
