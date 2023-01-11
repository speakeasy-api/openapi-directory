import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteTransactionCategorizationRulePathParams extends SpeakeasyBase {
    ruleId: number;
}
export declare class DeleteTransactionCategorizationRuleRequest extends SpeakeasyBase {
    pathParams: DeleteTransactionCategorizationRulePathParams;
}
export declare class DeleteTransactionCategorizationRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
