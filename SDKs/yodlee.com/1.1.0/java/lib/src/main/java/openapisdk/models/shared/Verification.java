package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Verification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account")
    public VerificationAccount account;
    public Verification withAccount(VerificationAccount account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public Long accountId;
    public Verification withAccountId(Long accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerAccountId")
    public Long providerAccountId;
    public Verification withProviderAccountId(Long providerAccountId) {
        this.providerAccountId = providerAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public VerificationReasonEnum reason;
    public Verification withReason(VerificationReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationDate")
    public String verificationDate;
    public Verification withVerificationDate(String verificationDate) {
        this.verificationDate = verificationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationId")
    public Long verificationId;
    public Verification withVerificationId(Long verificationId) {
        this.verificationId = verificationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationStatus")
    public VerificationVerificationStatusEnum verificationStatus;
    public Verification withVerificationStatus(VerificationVerificationStatusEnum verificationStatus) {
        this.verificationStatus = verificationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationType")
    public VerificationVerificationTypeEnum verificationType;
    public Verification withVerificationType(VerificationVerificationTypeEnum verificationType) {
        this.verificationType = verificationType;
        return this;
    }
}