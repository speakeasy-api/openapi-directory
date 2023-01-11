import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RunTransactionCategorizationRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: number;
}

export enum RunTransactionCategorizationRuleActionEnum {
    Run = "run"
}


export class RunTransactionCategorizationRuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action: RunTransactionCategorizationRuleActionEnum;
}


export class RunTransactionCategorizationRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RunTransactionCategorizationRulePathParams;

  @SpeakeasyMetadata()
  queryParams: RunTransactionCategorizationRuleQueryParams;
}


export class RunTransactionCategorizationRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
