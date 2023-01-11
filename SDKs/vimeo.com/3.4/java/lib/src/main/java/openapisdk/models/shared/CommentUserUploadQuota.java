package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserUploadQuota
 * Appears only when the user has upload access and is looking at their own user record.
**/
public class CommentUserUploadQuota {
    @JsonProperty("lifetime")
    public CommentUserUploadQuotaLifetime lifetime;
    public CommentUserUploadQuota withLifetime(CommentUserUploadQuotaLifetime lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonProperty("periodic")
    public CommentUserUploadQuotaPeriodic periodic;
    public CommentUserUploadQuota withPeriodic(CommentUserUploadQuotaPeriodic periodic) {
        this.periodic = periodic;
        return this;
    }
    @JsonProperty("space")
    public CommentUserUploadQuotaSpace space;
    public CommentUserUploadQuota withSpace(CommentUserUploadQuotaSpace space) {
        this.space = space;
        return this;
    }
}