import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateTransactionCategorizationRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: number;
}


export class UpdateTransactionCategorizationRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateTransactionCategorizationRulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.TransactionCategorizationRuleRequest;
}


export class UpdateTransactionCategorizationRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
