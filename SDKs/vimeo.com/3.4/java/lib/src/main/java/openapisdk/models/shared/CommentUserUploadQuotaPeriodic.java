package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserUploadQuotaPeriodic
 * Information about the user's usage for the current period.
**/
public class CommentUserUploadQuotaPeriodic {
    @JsonProperty("free")
    public Double free;
    public CommentUserUploadQuotaPeriodic withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public CommentUserUploadQuotaPeriodic withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("reset_date")
    public String resetDate;
    public CommentUserUploadQuotaPeriodic withResetDate(String resetDate) {
        this.resetDate = resetDate;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public CommentUserUploadQuotaPeriodic withUsed(Double used) {
        this.used = used;
        return this;
    }
}