package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunTransactionCategorizationRuleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public RunTransactionCategorizationRuleActionEnum action;
    public RunTransactionCategorizationRuleQueryParams withAction(RunTransactionCategorizationRuleActionEnum action) {
        this.action = action;
        return this;
    }
}