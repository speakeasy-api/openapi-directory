package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrRunTransactionCategorizationRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=action")
    public String action;
    public CreateOrRunTransactionCategorizationRulesQueryParams withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ruleParam")
    public String ruleParam;
    public CreateOrRunTransactionCategorizationRulesQueryParams withRuleParam(String ruleParam) {
        this.ruleParam = ruleParam;
        return this;
    }
}