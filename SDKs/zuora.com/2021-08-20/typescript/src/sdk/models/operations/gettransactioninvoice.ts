import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionInvoicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account-key" })
  accountKey: string;
}


export class GetTransactionInvoiceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;
}


export class GetTransactionInvoiceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetTransactionInvoiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionInvoicePathParams;

  @SpeakeasyMetadata()
  queryParams: GetTransactionInvoiceQueryParams;

  @SpeakeasyMetadata()
  headers: GetTransactionInvoiceHeaders;
}


export class GetTransactionInvoiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getInvoiceFileWrapper?: shared.GetInvoiceFileWrapper;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
