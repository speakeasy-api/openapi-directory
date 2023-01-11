package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TransactionCategoryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionCategory")
    public TransactionCategory[] transactionCategory;
    public TransactionCategoryResponse withTransactionCategory(TransactionCategory[] transactionCategory) {
        this.transactionCategory = transactionCategory;
        return this;
    }
}