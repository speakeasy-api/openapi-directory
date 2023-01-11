package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DerivedTransactionsLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactions")
    public String transactions;
    public DerivedTransactionsLinks withTransactions(String transactions) {
        this.transactions = transactions;
        return this;
    }
}