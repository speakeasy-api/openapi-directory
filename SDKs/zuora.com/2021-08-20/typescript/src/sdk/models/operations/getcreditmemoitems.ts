import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCreditMemoItemsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=creditMemoId" })
  creditMemoId: string;
}


export class GetCreditMemoItemsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appliedAmount" })
  appliedAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refundAmount" })
  refundAmount?: number;

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


export class GetCreditMemoItemsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=zuora-version" })
  zuoraVersion?: string;
}


export class GetCreditMemoItemsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCreditMemoItemsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCreditMemoItemsQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreditMemoItemsHeaders;
}


export class GetCreditMemoItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoItemsListType?: shared.GetCreditMemoItemsListType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
