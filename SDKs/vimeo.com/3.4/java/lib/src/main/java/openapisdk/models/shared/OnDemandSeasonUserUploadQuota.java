package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserUploadQuota
 * Appears only when the user has upload access and is looking at their own user record.
**/
public class OnDemandSeasonUserUploadQuota {
    @JsonProperty("lifetime")
    public OnDemandSeasonUserUploadQuotaLifetime lifetime;
    public OnDemandSeasonUserUploadQuota withLifetime(OnDemandSeasonUserUploadQuotaLifetime lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonProperty("periodic")
    public OnDemandSeasonUserUploadQuotaPeriodic periodic;
    public OnDemandSeasonUserUploadQuota withPeriodic(OnDemandSeasonUserUploadQuotaPeriodic periodic) {
        this.periodic = periodic;
        return this;
    }
    @JsonProperty("space")
    public OnDemandSeasonUserUploadQuotaSpace space;
    public OnDemandSeasonUserUploadQuota withSpace(OnDemandSeasonUserUploadQuotaSpace space) {
        this.space = space;
        return this;
    }
}