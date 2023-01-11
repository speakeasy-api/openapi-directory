import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRetrieveAllPaymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appliedAmount" })
  appliedAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creditBalanceAmount" })
  creditBalanceAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=effectiveDate" })
  effectiveDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refundAmount" })
  refundAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.GlobalRequestPageSizeEnum5;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.GlobalRequestPageSizeEnum6;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unappliedAmount" })
  unappliedAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedDate" })
  updatedDate?: Date;
}


export class GetRetrieveAllPaymentsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRetrieveAllPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRetrieveAllPaymentsQueryParams;

  @SpeakeasyMetadata()
  headers: GetRetrieveAllPaymentsHeaders;
}


export class GetRetrieveAllPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  paymentCollectionResponseType?: shared.PaymentCollectionResponseType;

  @SpeakeasyMetadata()
  statusCode: number;
}
