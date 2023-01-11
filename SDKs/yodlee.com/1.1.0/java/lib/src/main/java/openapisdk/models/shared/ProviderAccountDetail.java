package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderAccountDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationSource")
    public ProviderAccountDetailAggregationSourceEnum aggregationSource;
    public ProviderAccountDetail withAggregationSource(ProviderAccountDetailAggregationSourceEnum aggregationSource) {
        this.aggregationSource = aggregationSource;
        return this;
    }
    @JsonProperty("consentId")
    public Long consentId;
    public ProviderAccountDetail withConsentId(Long consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public ProviderAccountDetail withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public AccountDataset[] dataset;
    public ProviderAccountDetail withDataset(AccountDataset[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ProviderAccountDetail withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isManual")
    public Boolean isManual;
    public ProviderAccountDetail withIsManual(Boolean isManual) {
        this.isManual = isManual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public ProviderAccountDetail withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginForm")
    public LoginForm[] loginForm;
    public ProviderAccountDetail withLoginForm(LoginForm[] loginForm) {
        this.loginForm = loginForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthMigrationStatus")
    public ProviderAccountDetailOauthMigrationStatusEnum oauthMigrationStatus;
    public ProviderAccountDetail withOauthMigrationStatus(ProviderAccountDetailOauthMigrationStatusEnum oauthMigrationStatus) {
        this.oauthMigrationStatus = oauthMigrationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public ProviderAccountPreferences preferences;
    public ProviderAccountDetail withPreferences(ProviderAccountPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public Long providerId;
    public ProviderAccountDetail withProviderId(Long providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ProviderAccountDetail withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ProviderAccountDetailStatusEnum status;
    public ProviderAccountDetail withStatus(ProviderAccountDetailStatusEnum status) {
        this.status = status;
        return this;
    }
}