import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCreditMemoPartsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;
}


export class GetCreditMemoPartsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetCreditMemoPartsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetCreditMemoPartsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreditMemoPartsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCreditMemoPartsQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreditMemoPartsHeaders;
}


export class GetCreditMemoPartsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoPartsCollectionType?: shared.GetCreditMemoPartsCollectionType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
