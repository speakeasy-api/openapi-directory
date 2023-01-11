package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserUploadQuota
 * Appears only when the user has upload access and is looking at their own user record.
**/
public class VideoVersionsUserUploadQuota {
    @JsonProperty("lifetime")
    public VideoVersionsUserUploadQuotaLifetime lifetime;
    public VideoVersionsUserUploadQuota withLifetime(VideoVersionsUserUploadQuotaLifetime lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonProperty("periodic")
    public VideoVersionsUserUploadQuotaPeriodic periodic;
    public VideoVersionsUserUploadQuota withPeriodic(VideoVersionsUserUploadQuotaPeriodic periodic) {
        this.periodic = periodic;
        return this;
    }
    @JsonProperty("space")
    public VideoVersionsUserUploadQuotaSpace space;
    public VideoVersionsUserUploadQuota withSpace(VideoVersionsUserUploadQuotaSpace space) {
        this.space = space;
        return this;
    }
}