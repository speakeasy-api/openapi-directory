import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteTransactionCategorizationRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" })
  ruleId: number;
}


export class DeleteTransactionCategorizationRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteTransactionCategorizationRulePathParams;
}


export class DeleteTransactionCategorizationRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  yodleeError?: shared.YodleeError;
}
