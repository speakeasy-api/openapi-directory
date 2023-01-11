import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=baseType" })
  baseType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categoryType" })
  categoryType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=container" })
  container?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detailCategoryId" })
  detailCategoryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highLevelCategoryId" })
  highLevelCategoryId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=keyword" })
  keyword?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class GetTransactionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTransactionsQueryParams;
}


export class GetTransactionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  transactionResponse?: shared.TransactionResponse;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
