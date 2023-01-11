package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DataExtractsProviderAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregationSource")
    public DataExtractsProviderAccountAggregationSourceEnum aggregationSource;
    public DataExtractsProviderAccount withAggregationSource(DataExtractsProviderAccountAggregationSourceEnum aggregationSource) {
        this.aggregationSource = aggregationSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdDate")
    public String createdDate;
    public DataExtractsProviderAccount withCreatedDate(String createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataset")
    public AccountDataset[] dataset;
    public DataExtractsProviderAccount withDataset(AccountDataset[] dataset) {
        this.dataset = dataset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public DataExtractsProviderAccount withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDeleted")
    public Boolean isDeleted;
    public DataExtractsProviderAccount withIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isManual")
    public Boolean isManual;
    public DataExtractsProviderAccount withIsManual(Boolean isManual) {
        this.isManual = isManual;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public DataExtractsProviderAccount withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthMigrationStatus")
    public DataExtractsProviderAccountOauthMigrationStatusEnum oauthMigrationStatus;
    public DataExtractsProviderAccount withOauthMigrationStatus(DataExtractsProviderAccountOauthMigrationStatusEnum oauthMigrationStatus) {
        this.oauthMigrationStatus = oauthMigrationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public Long providerId;
    public DataExtractsProviderAccount withProviderId(Long providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestId")
    public String requestId;
    public DataExtractsProviderAccount withRequestId(String requestId) {
        this.requestId = requestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public DataExtractsProviderAccountStatusEnum status;
    public DataExtractsProviderAccount withStatus(DataExtractsProviderAccountStatusEnum status) {
        this.status = status;
        return this;
    }
}