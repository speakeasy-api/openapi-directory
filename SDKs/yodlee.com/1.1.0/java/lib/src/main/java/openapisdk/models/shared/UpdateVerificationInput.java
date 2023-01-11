package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateVerificationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public VerificationAccount account;
    public UpdateVerificationInput withAccount(VerificationAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public UpdateVerificationInput withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public UpdateVerificationInput withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonProperty("transaction")
    public VerificationTransaction[] transaction;
    public UpdateVerificationInput withTransaction(VerificationTransaction[] transaction) {
        this.transaction = transaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationType")
    public UpdateVerificationVerificationTypeEnum verificationType;
    public UpdateVerificationInput withVerificationType(UpdateVerificationVerificationTypeEnum verificationType) {
        this.verificationType = verificationType;
        return this;
    }
}