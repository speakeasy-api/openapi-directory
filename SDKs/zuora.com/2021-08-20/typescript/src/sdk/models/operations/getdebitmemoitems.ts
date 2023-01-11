import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDebitMemoItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debitMemoId" })
  debitMemoId: string;
}


export class GetDebitMemoItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beAppliedAmount" })
  beAppliedAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceEndDate" })
  serviceEndDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceStartDate" })
  serviceStartDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skuName" })
  skuName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceItemId" })
  sourceItemId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subscriptionId" })
  subscriptionId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedDate" })
  updatedDate?: Date;
}


export class GetDebitMemoItemsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class GetDebitMemoItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDebitMemoItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDebitMemoItemsQueryParams;

  @SpeakeasyMetadata()
  headers: GetDebitMemoItemsHeaders;
}


export class GetDebitMemoItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDebitMemoItemCollectionType?: shared.GetDebitMemoItemCollectionType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
