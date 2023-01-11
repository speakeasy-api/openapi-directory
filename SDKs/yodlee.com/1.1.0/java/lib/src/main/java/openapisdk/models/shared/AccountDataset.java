package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AccountDataset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalStatus")
    public AccountDatasetAdditionalStatusEnum additionalStatus;
    public AccountDataset withAdditionalStatus(AccountDatasetAdditionalStatusEnum additionalStatus) {
        this.additionalStatus = additionalStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateAttempt")
    public String lastUpdateAttempt;
    public AccountDataset withLastUpdateAttempt(String lastUpdateAttempt) {
        this.lastUpdateAttempt = lastUpdateAttempt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdated")
    public String lastUpdated;
    public AccountDataset withLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public AccountDatasetNameEnum name;
    public AccountDataset withName(AccountDatasetNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextUpdateScheduled")
    public String nextUpdateScheduled;
    public AccountDataset withNextUpdateScheduled(String nextUpdateScheduled) {
        this.nextUpdateScheduled = nextUpdateScheduled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateEligibility")
    public AccountDatasetUpdateEligibilityEnum updateEligibility;
    public AccountDataset withUpdateEligibility(AccountDatasetUpdateEligibilityEnum updateEligibility) {
        this.updateEligibility = updateEligibility;
        return this;
    }
}