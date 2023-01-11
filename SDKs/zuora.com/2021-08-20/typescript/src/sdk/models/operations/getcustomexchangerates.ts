import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomExchangeRatesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=currency" })
  currency: string;
}


export class GetCustomExchangeRatesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: string;
}


export class GetCustomExchangeRatesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Entity-Ids" })
  zuoraEntityIds?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Zuora-Track-Id" })
  zuoraTrackId?: string;
}


export class GetCustomExchangeRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomExchangeRatesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomExchangeRatesQueryParams;

  @SpeakeasyMetadata()
  headers: GetCustomExchangeRatesHeaders;
}


export class GetCustomExchangeRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getCustomExchangeRatesType?: shared.GetCustomExchangeRatesType;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
