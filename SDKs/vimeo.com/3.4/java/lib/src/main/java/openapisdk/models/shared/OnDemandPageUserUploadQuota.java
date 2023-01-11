package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserUploadQuota
 * Appears only when the user has upload access and is looking at their own user record.
**/
public class OnDemandPageUserUploadQuota {
    @JsonProperty("lifetime")
    public OnDemandPageUserUploadQuotaLifetime lifetime;
    public OnDemandPageUserUploadQuota withLifetime(OnDemandPageUserUploadQuotaLifetime lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonProperty("periodic")
    public OnDemandPageUserUploadQuotaPeriodic periodic;
    public OnDemandPageUserUploadQuota withPeriodic(OnDemandPageUserUploadQuotaPeriodic periodic) {
        this.periodic = periodic;
        return this;
    }
    @JsonProperty("space")
    public OnDemandPageUserUploadQuotaSpace space;
    public OnDemandPageUserUploadQuota withSpace(OnDemandPageUserUploadQuotaSpace space) {
        this.space = space;
        return this;
    }
}