import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRefundsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=methodType" })
  methodType?: shared.GlobalRequestPageSizeEnum7;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=paymentId" })
  paymentId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=refundDate" })
  refundDate?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: shared.GlobalRequestPageSizeEnum8;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.GlobalRequestPageSizeEnum6;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedDate" })
  updatedDate?: Date;
}


export class GetRefundsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetRefundsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRefundsQueryParams;

  @SpeakeasyMetadata()
  headers: GetRefundsHeaders;
}


export class GetRefundsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRefundCollectionType?: shared.GetRefundCollectionType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
