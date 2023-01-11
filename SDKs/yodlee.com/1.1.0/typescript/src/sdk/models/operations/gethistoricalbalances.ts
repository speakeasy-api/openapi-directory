import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHistoricalBalancesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fromDate" })
  fromDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeCF" })
  includeCF?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval" })
  interval?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=toDate" })
  toDate?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: number;
}


export class GetHistoricalBalancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHistoricalBalancesQueryParams;
}


export class GetHistoricalBalancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accountHistoricalBalancesResponse?: shared.AccountHistoricalBalancesResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
