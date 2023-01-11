package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserUploadQuotaSpace
 * Information about the user's upload space remaining for the current period.
**/
public class CommentUserUploadQuotaSpace {
    @JsonProperty("free")
    public Double free;
    public CommentUserUploadQuotaSpace withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public CommentUserUploadQuotaSpace withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("showing")
    public CommentUserUploadQuotaSpaceShowingEnum showing;
    public CommentUserUploadQuotaSpace withShowing(CommentUserUploadQuotaSpaceShowingEnum showing) {
        this.showing = showing;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public CommentUserUploadQuotaSpace withUsed(Double used) {
        this.used = used;
        return this;
    }
}