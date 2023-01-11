package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TransactionCategorizationRuleRequest {
    @JsonProperty("rule")
    public TransactionCategorizationRuleInfo rule;
    public TransactionCategorizationRuleRequest withRule(TransactionCategorizationRuleInfo rule) {
        this.rule = rule;
        return this;
    }
}