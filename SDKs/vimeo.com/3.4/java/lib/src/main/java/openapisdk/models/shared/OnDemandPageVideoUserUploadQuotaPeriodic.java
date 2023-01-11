package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserUploadQuotaPeriodic
 * Information about the user's usage for the current period.
**/
public class OnDemandPageVideoUserUploadQuotaPeriodic {
    @JsonProperty("free")
    public Double free;
    public OnDemandPageVideoUserUploadQuotaPeriodic withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public OnDemandPageVideoUserUploadQuotaPeriodic withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("reset_date")
    public String resetDate;
    public OnDemandPageVideoUserUploadQuotaPeriodic withResetDate(String resetDate) {
        this.resetDate = resetDate;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public OnDemandPageVideoUserUploadQuotaPeriodic withUsed(Double used) {
        this.used = used;
        return this;
    }
}