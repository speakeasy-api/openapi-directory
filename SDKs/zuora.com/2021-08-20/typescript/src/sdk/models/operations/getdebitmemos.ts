import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDebitMemosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=beAppliedAmount" })
  beAppliedAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debitMemoDate" })
  debitMemoDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dueDate" })
  dueDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=referredInvoiceId" })
  referredInvoiceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.GlobalRequestPageSizeEnum2;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetDate" })
  targetDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxAmount" })
  taxAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=totalTaxExemptAmount" })
  totalTaxExemptAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedDate" })
  updatedDate?: Date;
}


export class GetDebitMemosHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetDebitMemosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetDebitMemosQueryParams;

  @SpeakeasyMetadata()
  headers: GetDebitMemosHeaders;
}


export class GetDebitMemosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDebitMemoCollectionType?: shared.GetDebitMemoCollectionType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
