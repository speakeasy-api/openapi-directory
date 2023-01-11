import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateOrRunTransactionCategorizationRulesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ruleParam" })
  ruleParam?: string;
}


export class CreateOrRunTransactionCategorizationRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateOrRunTransactionCategorizationRulesQueryParams;
}


export class CreateOrRunTransactionCategorizationRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
