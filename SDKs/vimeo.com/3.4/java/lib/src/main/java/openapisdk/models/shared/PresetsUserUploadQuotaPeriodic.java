package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserUploadQuotaPeriodic
 * Information about the user's usage for the current period.
**/
public class PresetsUserUploadQuotaPeriodic {
    @JsonProperty("free")
    public Double free;
    public PresetsUserUploadQuotaPeriodic withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public PresetsUserUploadQuotaPeriodic withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("reset_date")
    public String resetDate;
    public PresetsUserUploadQuotaPeriodic withResetDate(String resetDate) {
        this.resetDate = resetDate;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public PresetsUserUploadQuotaPeriodic withUsed(Double used) {
        this.used = used;
        return this;
    }
}