import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTaxationItemsOfCreditMemoItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cmitemid" })
  cmitemid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;
}


export class GetTaxationItemsOfCreditMemoItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetTaxationItemsOfCreditMemoItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetTaxationItemsOfCreditMemoItem200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class GetTaxationItemsOfCreditMemoItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaxationItemsOfCreditMemoItemPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTaxationItemsOfCreditMemoItemQueryParams;

  @SpeakeasyMetadata()
  headers: GetTaxationItemsOfCreditMemoItemHeaders;
}


export class GetTaxationItemsOfCreditMemoItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTaxationItemsOfCreditMemoItem200ApplicationJSONObject?: GetTaxationItemsOfCreditMemoItem200ApplicationJson;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
