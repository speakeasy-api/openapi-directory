import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllProvidersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=capability" })
  capability?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset$filter" })
  datasetDollarFilter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fullAccountNumberFields" })
  fullAccountNumberFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=institutionId" })
  institutionId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=providerId" })
  providerId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skip" })
  skip?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" })
  top?: number;
}


export class GetAllProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllProvidersQueryParams;
}


export class GetAllProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  providerResponse?: shared.ProviderResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
