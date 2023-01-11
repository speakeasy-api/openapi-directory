package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public VerifiedAccount[] account;
    public VerifyAccount withAccount(VerifiedAccount[] account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transactionCriteria")
    public VerifyTransactionCriteria[] transactionCriteria;
    public VerifyAccount withTransactionCriteria(VerifyTransactionCriteria[] transactionCriteria) {
        this.transactionCriteria = transactionCriteria;
        return this;
    }
}