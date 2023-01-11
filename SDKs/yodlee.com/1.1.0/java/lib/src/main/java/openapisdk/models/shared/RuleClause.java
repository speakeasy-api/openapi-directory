package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RuleClause {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public RuleClauseFieldEnum field;
    public RuleClause withField(RuleClauseFieldEnum field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fieldValue")
    public String fieldValue;
    public RuleClause withFieldValue(String fieldValue) {
        this.fieldValue = fieldValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public RuleClauseOperationEnum operation;
    public RuleClause withOperation(RuleClauseOperationEnum operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleClauseId")
    public Long ruleClauseId;
    public RuleClause withRuleClauseId(Long ruleClauseId) {
        this.ruleClauseId = ruleClauseId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDefinedRuleId")
    public Long userDefinedRuleId;
    public RuleClause withUserDefinedRuleId(Long userDefinedRuleId) {
        this.userDefinedRuleId = userDefinedRuleId;
        return this;
    }
}