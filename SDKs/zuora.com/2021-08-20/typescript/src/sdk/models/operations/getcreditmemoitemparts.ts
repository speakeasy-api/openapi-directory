import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCreditMemoItemPartsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=partid" })
  partid: string;
}


export class GetCreditMemoItemPartsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetCreditMemoItemPartsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetCreditMemoItemPartsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreditMemoItemPartsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCreditMemoItemPartsQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreditMemoItemPartsHeaders;
}


export class GetCreditMemoItemPartsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoItemPartsCollectionType?: shared.GetCreditMemoItemPartsCollectionType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
