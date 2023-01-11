package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerificationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public VerificationAccount account;
    public VerificationStatus withAccount(VerificationAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public VerificationStatus withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public VerificationStatus withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public VerificationStatusReasonEnum reason;
    public VerificationStatus withReason(VerificationStatusReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingAttempts")
    public Long remainingAttempts;
    public VerificationStatus withRemainingAttempts(Long remainingAttempts) {
        this.remainingAttempts = remainingAttempts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationDate")
    public String verificationDate;
    public VerificationStatus withVerificationDate(String verificationDate) {
        this.verificationDate = verificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationId")
    public Long verificationId;
    public VerificationStatus withVerificationId(Long verificationId) {
        this.verificationId = verificationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationStatus")
    public VerificationStatusVerificationStatusEnum verificationStatus;
    public VerificationStatus withVerificationStatus(VerificationStatusVerificationStatusEnum verificationStatus) {
        this.verificationStatus = verificationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationType")
    public VerificationStatusVerificationTypeEnum verificationType;
    public VerificationStatus withVerificationType(VerificationStatusVerificationTypeEnum verificationType) {
        this.verificationType = verificationType;
        return this;
    }
}