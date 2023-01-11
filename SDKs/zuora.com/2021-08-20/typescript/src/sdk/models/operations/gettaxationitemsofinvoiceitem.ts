import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTaxationItemsOfInvoiceItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=invoiceId" })
  invoiceId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetTaxationItemsOfInvoiceItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetTaxationItemsOfInvoiceItemHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetTaxationItemsOfInvoiceItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaxationItemsOfInvoiceItemPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTaxationItemsOfInvoiceItemQueryParams;

  @SpeakeasyMetadata()
  headers: GetTaxationItemsOfInvoiceItemHeaders;
}


export class GetTaxationItemsOfInvoiceItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getInvoiceTaxationItemsResponse?: shared.GetInvoiceTaxationItemsResponse;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
