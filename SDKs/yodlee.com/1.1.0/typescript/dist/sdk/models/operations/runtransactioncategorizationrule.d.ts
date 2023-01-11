import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunTransactionCategorizationRulePathParams extends SpeakeasyBase {
    ruleId: number;
}
export declare enum RunTransactionCategorizationRuleActionEnum {
    Run = "run"
}
export declare class RunTransactionCategorizationRuleQueryParams extends SpeakeasyBase {
    action: RunTransactionCategorizationRuleActionEnum;
}
export declare class RunTransactionCategorizationRuleRequest extends SpeakeasyBase {
    pathParams: RunTransactionCategorizationRulePathParams;
    queryParams: RunTransactionCategorizationRuleQueryParams;
}
export declare class RunTransactionCategorizationRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    yodleeError?: shared.YodleeError;
}
