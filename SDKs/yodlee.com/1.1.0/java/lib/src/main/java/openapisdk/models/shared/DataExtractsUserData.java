package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsUserData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public DataExtractsAccount[] account;
    public DataExtractsUserData withAccount(DataExtractsAccount[] account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holding")
    public DataExtractsHolding[] holding;
    public DataExtractsUserData withHolding(DataExtractsHolding[] holding) {
        this.holding = holding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccount")
    public DataExtractsProviderAccount[] providerAccount;
    public DataExtractsUserData withProviderAccount(DataExtractsProviderAccount[] providerAccount) {
        this.providerAccount = providerAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalTransactionsCount")
    public Long totalTransactionsCount;
    public DataExtractsUserData withTotalTransactionsCount(Long totalTransactionsCount) {
        this.totalTransactionsCount = totalTransactionsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transaction")
    public DataExtractsTransaction[] transaction;
    public DataExtractsUserData withTransaction(DataExtractsTransaction[] transaction) {
        this.transaction = transaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public DataExtractsUser user;
    public DataExtractsUserData withUser(DataExtractsUser user) {
        this.user = user;
        return this;
    }
}