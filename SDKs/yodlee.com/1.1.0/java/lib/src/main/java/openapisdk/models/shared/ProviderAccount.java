package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProviderAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationSource")
    public ProviderAccountAggregationSourceEnum aggregationSource;
    public ProviderAccount withAggregationSource(ProviderAccountAggregationSourceEnum aggregationSource) {
        this.aggregationSource = aggregationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentId")
    public Long consentId;
    public ProviderAccount withConsentId(Long consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public ProviderAccount withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public AccountDataset[] dataset;
    public ProviderAccount withDataset(AccountDataset[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ProviderAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isManual")
    public Boolean isManual;
    public ProviderAccount withIsManual(Boolean isManual) {
        this.isManual = isManual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public ProviderAccount withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthMigrationStatus")
    public ProviderAccountOauthMigrationStatusEnum oauthMigrationStatus;
    public ProviderAccount withOauthMigrationStatus(ProviderAccountOauthMigrationStatusEnum oauthMigrationStatus) {
        this.oauthMigrationStatus = oauthMigrationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preferences")
    public ProviderAccountPreferences preferences;
    public ProviderAccount withPreferences(ProviderAccountPreferences preferences) {
        this.preferences = preferences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public Long providerId;
    public ProviderAccount withProviderId(Long providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public ProviderAccount withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ProviderAccountStatusEnum status;
    public ProviderAccount withStatus(ProviderAccountStatusEnum status) {
        this.status = status;
        return this;
    }
}