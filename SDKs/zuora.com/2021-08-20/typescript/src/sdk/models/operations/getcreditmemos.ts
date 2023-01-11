import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCreditMemosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appliedAmount" })
  appliedAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=autoApplyUponPosting" })
  autoApplyUponPosting?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creditMemoDate" })
  creditMemoDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeFromAutoApplyRules" })
  excludeFromAutoApplyRules?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=referredInvoiceId" })
  referredInvoiceId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refundAmount" })
  refundAmount?: number;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transferredToAccounting" })
  transferredToAccounting?: shared.GlobalRequestPageSizeEnum3;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unappliedAmount" })
  unappliedAmount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedDate" })
  updatedDate?: Date;
}


export class GetCreditMemosHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetCreditMemosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCreditMemosQueryParams;

  @SpeakeasyMetadata()
  headers: GetCreditMemosHeaders;
}


export class GetCreditMemosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCreditMemoCollectionType?: shared.GetCreditMemoCollectionType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
