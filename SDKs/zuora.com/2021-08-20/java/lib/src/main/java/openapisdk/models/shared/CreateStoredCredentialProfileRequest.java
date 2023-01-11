package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStoredCredentialProfileRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public CreateStoredCredentialProfileRequestActionEnum action;
    public CreateStoredCredentialProfileRequest withAction(CreateStoredCredentialProfileRequestActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agreedOn")
    public LocalDate agreedOn;
    public CreateStoredCredentialProfileRequest withAgreedOn(LocalDate agreedOn) {
        this.agreedOn = agreedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authGateway")
    public String authGateway;
    public CreateStoredCredentialProfileRequest withAuthGateway(String authGateway) {
        this.authGateway = authGateway;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardSecurityCode")
    public String cardSecurityCode;
    public CreateStoredCredentialProfileRequest withCardSecurityCode(String cardSecurityCode) {
        this.cardSecurityCode = cardSecurityCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentAgreementRef")
    public String consentAgreementRef;
    public CreateStoredCredentialProfileRequest withConsentAgreementRef(String consentAgreementRef) {
        this.consentAgreementRef = consentAgreementRef;
        return this;
    }
    @JsonProperty("consentAgreementSrc")
    public CreateStoredCredentialProfileRequestConsentAgreementSrcEnum consentAgreementSrc;
    public CreateStoredCredentialProfileRequest withConsentAgreementSrc(CreateStoredCredentialProfileRequestConsentAgreementSrcEnum consentAgreementSrc) {
        this.consentAgreementSrc = consentAgreementSrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkTransactionId")
    public String networkTransactionId;
    public CreateStoredCredentialProfileRequest withNetworkTransactionId(String networkTransactionId) {
        this.networkTransactionId = networkTransactionId;
        return this;
    }
    @JsonProperty("status")
    public CreateStoredCredentialProfileRequestStatusEnum status;
    public CreateStoredCredentialProfileRequest withStatus(CreateStoredCredentialProfileRequestStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("type")
    public CreateStoredCredentialProfileRequestTypeEnum type;
    public CreateStoredCredentialProfileRequest withType(CreateStoredCredentialProfileRequestTypeEnum type) {
        this.type = type;
        return this;
    }
}