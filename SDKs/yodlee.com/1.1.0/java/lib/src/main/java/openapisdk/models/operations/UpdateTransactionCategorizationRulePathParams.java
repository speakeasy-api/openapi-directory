package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTransactionCategorizationRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public Long ruleId;
    public UpdateTransactionCategorizationRulePathParams withRuleId(Long ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}