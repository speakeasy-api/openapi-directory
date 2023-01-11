package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedTransactionSummaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("links")
    public DerivedTransactionsLinks links;
    public DerivedTransactionSummaryResponse withLinks(DerivedTransactionsLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionSummary")
    public DerivedTransactionsSummary[] transactionSummary;
    public DerivedTransactionSummaryResponse withTransactionSummary(DerivedTransactionsSummary[] transactionSummary) {
        this.transactionSummary = transactionSummary;
        return this;
    }
}