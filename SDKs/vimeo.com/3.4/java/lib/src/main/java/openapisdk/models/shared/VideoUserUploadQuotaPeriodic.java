package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserUploadQuotaPeriodic
 * Information about the user's usage for the current period.
**/
public class VideoUserUploadQuotaPeriodic {
    @JsonProperty("free")
    public Double free;
    public VideoUserUploadQuotaPeriodic withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public VideoUserUploadQuotaPeriodic withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("reset_date")
    public String resetDate;
    public VideoUserUploadQuotaPeriodic withResetDate(String resetDate) {
        this.resetDate = resetDate;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public VideoUserUploadQuotaPeriodic withUsed(Double used) {
        this.used = used;
        return this;
    }
}