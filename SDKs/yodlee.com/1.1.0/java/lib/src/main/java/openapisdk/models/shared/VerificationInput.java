package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerificationInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public VerificationAccount account;
    public VerificationInput withAccount(VerificationAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public VerificationInput withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public VerificationInput withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationType")
    public VerificationVerificationTypeEnum verificationType;
    public VerificationInput withVerificationType(VerificationVerificationTypeEnum verificationType) {
        this.verificationType = verificationType;
        return this;
    }
}