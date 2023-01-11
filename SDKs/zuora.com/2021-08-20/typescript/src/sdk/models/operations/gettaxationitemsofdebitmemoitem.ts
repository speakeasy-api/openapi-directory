import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTaxationItemsOfDebitMemoItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debitMemoId" })
  debitMemoId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dmitemid" })
  dmitemid: string;
}


export class GetTaxationItemsOfDebitMemoItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetTaxationItemsOfDebitMemoItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetTaxationItemsOfDebitMemoItem200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Record<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=nextPage" })
  nextPage?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}


export class GetTaxationItemsOfDebitMemoItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaxationItemsOfDebitMemoItemPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTaxationItemsOfDebitMemoItemQueryParams;

  @SpeakeasyMetadata()
  headers: GetTaxationItemsOfDebitMemoItemHeaders;
}


export class GetTaxationItemsOfDebitMemoItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTaxationItemsOfDebitMemoItem200ApplicationJSONObject?: GetTaxationItemsOfDebitMemoItem200ApplicationJson;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
