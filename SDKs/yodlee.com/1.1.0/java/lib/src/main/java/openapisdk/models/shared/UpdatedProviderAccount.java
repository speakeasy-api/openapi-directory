package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdatedProviderAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationSource")
    public UpdatedProviderAccountAggregationSourceEnum aggregationSource;
    public UpdatedProviderAccount withAggregationSource(UpdatedProviderAccountAggregationSourceEnum aggregationSource) {
        this.aggregationSource = aggregationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public UpdatedProviderAccount withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public AccountDataset[] dataset;
    public UpdatedProviderAccount withDataset(AccountDataset[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public UpdatedProviderAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isManual")
    public Boolean isManual;
    public UpdatedProviderAccount withIsManual(Boolean isManual) {
        this.isManual = isManual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public UpdatedProviderAccount withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loginForm")
    public LoginForm[] loginForm;
    public UpdatedProviderAccount withLoginForm(LoginForm[] loginForm) {
        this.loginForm = loginForm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthMigrationStatus")
    public UpdatedProviderAccountOauthMigrationStatusEnum oauthMigrationStatus;
    public UpdatedProviderAccount withOauthMigrationStatus(UpdatedProviderAccountOauthMigrationStatusEnum oauthMigrationStatus) {
        this.oauthMigrationStatus = oauthMigrationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public Long providerId;
    public UpdatedProviderAccount withProviderId(Long providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public UpdatedProviderAccount withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public UpdatedProviderAccountStatusEnum status;
    public UpdatedProviderAccount withStatus(UpdatedProviderAccountStatusEnum status) {
        this.status = status;
        return this;
    }
}