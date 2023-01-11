package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserUploadQuotaPeriodic
 * Information about the user's usage for the current period.
**/
public class OnDemandPageUserUploadQuotaPeriodic {
    @JsonProperty("free")
    public Double free;
    public OnDemandPageUserUploadQuotaPeriodic withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public OnDemandPageUserUploadQuotaPeriodic withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("reset_date")
    public String resetDate;
    public OnDemandPageUserUploadQuotaPeriodic withResetDate(String resetDate) {
        this.resetDate = resetDate;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public OnDemandPageUserUploadQuotaPeriodic withUsed(Double used) {
        this.used = used;
        return this;
    }
}