package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunTransactionCategorizationRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public Long ruleId;
    public RunTransactionCategorizationRulePathParams withRuleId(Long ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}