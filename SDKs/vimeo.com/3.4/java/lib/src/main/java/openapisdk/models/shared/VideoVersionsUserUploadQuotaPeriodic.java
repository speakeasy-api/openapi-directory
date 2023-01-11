package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserUploadQuotaPeriodic
 * Information about the user's usage for the current period.
**/
public class VideoVersionsUserUploadQuotaPeriodic {
    @JsonProperty("free")
    public Double free;
    public VideoVersionsUserUploadQuotaPeriodic withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public VideoVersionsUserUploadQuotaPeriodic withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("reset_date")
    public String resetDate;
    public VideoVersionsUserUploadQuotaPeriodic withResetDate(String resetDate) {
        this.resetDate = resetDate;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public VideoVersionsUserUploadQuotaPeriodic withUsed(Double used) {
        this.used = used;
        return this;
    }
}