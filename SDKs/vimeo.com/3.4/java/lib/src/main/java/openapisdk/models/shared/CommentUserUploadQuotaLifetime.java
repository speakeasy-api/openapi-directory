package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserUploadQuotaLifetime
 * Information about the user's lifetime upload usage.
**/
public class CommentUserUploadQuotaLifetime {
    @JsonProperty("free")
    public Double free;
    public CommentUserUploadQuotaLifetime withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public CommentUserUploadQuotaLifetime withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public CommentUserUploadQuotaLifetime withUsed(Double used) {
        this.used = used;
        return this;
    }
}