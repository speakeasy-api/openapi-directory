package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserUploadQuotaPeriodic
 * Information about the user's usage for the current period.
**/
public class GroupUserUploadQuotaPeriodic {
    @JsonProperty("free")
    public Double free;
    public GroupUserUploadQuotaPeriodic withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public GroupUserUploadQuotaPeriodic withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("reset_date")
    public String resetDate;
    public GroupUserUploadQuotaPeriodic withResetDate(String resetDate) {
        this.resetDate = resetDate;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public GroupUserUploadQuotaPeriodic withUsed(Double used) {
        this.used = used;
        return this;
    }
}