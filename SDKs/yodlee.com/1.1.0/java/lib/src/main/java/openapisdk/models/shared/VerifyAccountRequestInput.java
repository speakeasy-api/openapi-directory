package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyAccountRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public VerifyAccountRequestInput withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("container")
    public VerifyAccountRequestContainerEnum container;
    public VerifyAccountRequestInput withContainer(VerifyAccountRequestContainerEnum container) {
        this.container = container;
        return this;
    }
    @JsonProperty("transactionCriteria")
    public VerifyTransactionCriteriaInput[] transactionCriteria;
    public VerifyAccountRequestInput withTransactionCriteria(VerifyTransactionCriteriaInput[] transactionCriteria) {
        this.transactionCriteria = transactionCriteria;
        return this;
    }
}