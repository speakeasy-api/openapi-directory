package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserUploadQuota
 * Appears only when the user has upload access and is looking at their own user record.
**/
public class GroupUserUploadQuota {
    @JsonProperty("lifetime")
    public GroupUserUploadQuotaLifetime lifetime;
    public GroupUserUploadQuota withLifetime(GroupUserUploadQuotaLifetime lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonProperty("periodic")
    public GroupUserUploadQuotaPeriodic periodic;
    public GroupUserUploadQuota withPeriodic(GroupUserUploadQuotaPeriodic periodic) {
        this.periodic = periodic;
        return this;
    }
    @JsonProperty("space")
    public GroupUserUploadQuotaSpace space;
    public GroupUserUploadQuota withSpace(GroupUserUploadQuotaSpace space) {
        this.space = space;
        return this;
    }
}