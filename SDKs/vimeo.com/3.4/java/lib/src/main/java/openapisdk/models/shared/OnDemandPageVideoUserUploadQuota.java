package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserUploadQuota
 * Appears only when the user has upload access and is looking at their own user record.
**/
public class OnDemandPageVideoUserUploadQuota {
    @JsonProperty("lifetime")
    public OnDemandPageVideoUserUploadQuotaLifetime lifetime;
    public OnDemandPageVideoUserUploadQuota withLifetime(OnDemandPageVideoUserUploadQuotaLifetime lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonProperty("periodic")
    public OnDemandPageVideoUserUploadQuotaPeriodic periodic;
    public OnDemandPageVideoUserUploadQuota withPeriodic(OnDemandPageVideoUserUploadQuotaPeriodic periodic) {
        this.periodic = periodic;
        return this;
    }
    @JsonProperty("space")
    public OnDemandPageVideoUserUploadQuotaSpace space;
    public OnDemandPageVideoUserUploadQuota withSpace(OnDemandPageVideoUserUploadQuotaSpace space) {
        this.space = space;
        return this;
    }
}