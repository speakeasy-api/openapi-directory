package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserUploadQuotaPeriodic
 * Information about the user's usage for the current period.
**/
public class OnDemandSeasonUserUploadQuotaPeriodic {
    @JsonProperty("free")
    public Double free;
    public OnDemandSeasonUserUploadQuotaPeriodic withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public OnDemandSeasonUserUploadQuotaPeriodic withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("reset_date")
    public String resetDate;
    public OnDemandSeasonUserUploadQuotaPeriodic withResetDate(String resetDate) {
        this.resetDate = resetDate;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public OnDemandSeasonUserUploadQuotaPeriodic withUsed(Double used) {
        this.used = used;
        return this;
    }
}