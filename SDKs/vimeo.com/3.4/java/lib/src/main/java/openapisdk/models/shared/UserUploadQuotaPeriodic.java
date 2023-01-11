package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserUploadQuotaPeriodic
 * Information about the user's usage for the current period.
**/
public class UserUploadQuotaPeriodic {
    @JsonProperty("free")
    public Double free;
    public UserUploadQuotaPeriodic withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public UserUploadQuotaPeriodic withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("reset_date")
    public String resetDate;
    public UserUploadQuotaPeriodic withResetDate(String resetDate) {
        this.resetDate = resetDate;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public UserUploadQuotaPeriodic withUsed(Double used) {
        this.used = used;
        return this;
    }
}