package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionCategorizationRuleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("txnRules")
    public TransactionCategorizationRule[] txnRules;
    public TransactionCategorizationRuleResponse withTxnRules(TransactionCategorizationRule[] txnRules) {
        this.txnRules = txnRules;
        return this;
    }
}