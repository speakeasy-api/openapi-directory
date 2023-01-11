package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserUploadQuota
 * Appears only when the user has upload access and is looking at their own user record.
**/
public class VideoUserUploadQuota {
    @JsonProperty("lifetime")
    public VideoUserUploadQuotaLifetime lifetime;
    public VideoUserUploadQuota withLifetime(VideoUserUploadQuotaLifetime lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonProperty("periodic")
    public VideoUserUploadQuotaPeriodic periodic;
    public VideoUserUploadQuota withPeriodic(VideoUserUploadQuotaPeriodic periodic) {
        this.periodic = periodic;
        return this;
    }
    @JsonProperty("space")
    public VideoUserUploadQuotaSpace space;
    public VideoUserUploadQuota withSpace(VideoUserUploadQuotaSpace space) {
        this.space = space;
        return this;
    }
}