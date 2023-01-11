package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionCategorizationRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryLevelId")
    public Integer categoryLevelId;
    public TransactionCategorizationRule withCategoryLevelId(Integer categoryLevelId) {
        this.categoryLevelId = categoryLevelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("memId")
    public Long memId;
    public TransactionCategorizationRule withMemId(Long memId) {
        this.memId = memId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleClauses")
    public RuleClause[] ruleClauses;
    public TransactionCategorizationRule withRuleClauses(RuleClause[] ruleClauses) {
        this.ruleClauses = ruleClauses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rulePriority")
    public Integer rulePriority;
    public TransactionCategorizationRule withRulePriority(Integer rulePriority) {
        this.rulePriority = rulePriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionCategorisationId")
    public Long transactionCategorisationId;
    public TransactionCategorizationRule withTransactionCategorisationId(Long transactionCategorisationId) {
        this.transactionCategorisationId = transactionCategorisationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userDefinedRuleId")
    public Long userDefinedRuleId;
    public TransactionCategorizationRule withUserDefinedRuleId(Long userDefinedRuleId) {
        this.userDefinedRuleId = userDefinedRuleId;
        return this;
    }
}