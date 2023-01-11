package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserUploadQuota
 * Appears only when the user has upload access and is looking at their own user record.
**/
public class PresetsUserUploadQuota {
    @JsonProperty("lifetime")
    public PresetsUserUploadQuotaLifetime lifetime;
    public PresetsUserUploadQuota withLifetime(PresetsUserUploadQuotaLifetime lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonProperty("periodic")
    public PresetsUserUploadQuotaPeriodic periodic;
    public PresetsUserUploadQuota withPeriodic(PresetsUserUploadQuotaPeriodic periodic) {
        this.periodic = periodic;
        return this;
    }
    @JsonProperty("space")
    public PresetsUserUploadQuotaSpace space;
    public PresetsUserUploadQuota withSpace(PresetsUserUploadQuotaSpace space) {
        this.space = space;
        return this;
    }
}