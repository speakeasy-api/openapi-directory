package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GetStoredCredentialProfilesResponseProfiles
 * Container for stored credential profiles.
 * 
**/
public class GetStoredCredentialProfilesResponseProfiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("activatedOn")
    public OffsetDateTime activatedOn;
    public GetStoredCredentialProfilesResponseProfiles withActivatedOn(OffsetDateTime activatedOn) {
        this.activatedOn = activatedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("agreedOn")
    public OffsetDateTime agreedOn;
    public GetStoredCredentialProfilesResponseProfiles withAgreedOn(OffsetDateTime agreedOn) {
        this.agreedOn = agreedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("brand")
    public String brand;
    public GetStoredCredentialProfilesResponseProfiles withBrand(String brand) {
        this.brand = brand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("cancelledOn")
    public OffsetDateTime cancelledOn;
    public GetStoredCredentialProfilesResponseProfiles withCancelledOn(OffsetDateTime cancelledOn) {
        this.cancelledOn = cancelledOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentAgreementRef")
    public String consentAgreementRef;
    public GetStoredCredentialProfilesResponseProfiles withConsentAgreementRef(String consentAgreementRef) {
        this.consentAgreementRef = consentAgreementRef;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentAgreementSrc")
    public GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum consentAgreementSrc;
    public GetStoredCredentialProfilesResponseProfiles withConsentAgreementSrc(GetStoredCredentialProfilesResponseProfilesConsentAgreementSrcEnum consentAgreementSrc) {
        this.consentAgreementSrc = consentAgreementSrc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiredOn")
    public OffsetDateTime expiredOn;
    public GetStoredCredentialProfilesResponseProfiles withExpiredOn(OffsetDateTime expiredOn) {
        this.expiredOn = expiredOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Long number;
    public GetStoredCredentialProfilesResponseProfiles withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodId")
    public String paymentMethodId;
    public GetStoredCredentialProfilesResponseProfiles withPaymentMethodId(String paymentMethodId) {
        this.paymentMethodId = paymentMethodId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetStoredCredentialProfilesResponseProfilesStatusEnum status;
    public GetStoredCredentialProfilesResponseProfiles withStatus(GetStoredCredentialProfilesResponseProfilesStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetStoredCredentialProfilesResponseProfilesTypeEnum type;
    public GetStoredCredentialProfilesResponseProfiles withType(GetStoredCredentialProfilesResponseProfilesTypeEnum type) {
        this.type = type;
        return this;
    }
}