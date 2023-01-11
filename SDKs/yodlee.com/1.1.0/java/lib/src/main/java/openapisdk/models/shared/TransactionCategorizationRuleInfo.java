package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionCategorizationRuleInfo {
    @JsonProperty("categoryId")
    public Integer categoryId;
    public TransactionCategorizationRuleInfo withCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public Integer priority;
    public TransactionCategorizationRuleInfo withPriority(Integer priority) {
        this.priority = priority;
        return this;
    }
    @JsonProperty("ruleClause")
    public FieldOperation[] ruleClause;
    public TransactionCategorizationRuleInfo withRuleClause(FieldOperation[] ruleClause) {
        this.ruleClause = ruleClause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public TransactionCategorizationRuleInfoSourceEnum source;
    public TransactionCategorizationRuleInfo withSource(TransactionCategorizationRuleInfoSourceEnum source) {
        this.source = source;
        return this;
    }
}