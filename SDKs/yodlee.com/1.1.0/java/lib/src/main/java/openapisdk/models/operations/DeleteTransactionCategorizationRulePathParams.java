package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTransactionCategorizationRulePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ruleId")
    public Long ruleId;
    public DeleteTransactionCategorizationRulePathParams withRuleId(Long ruleId) {
        this.ruleId = ruleId;
        return this;
    }
}