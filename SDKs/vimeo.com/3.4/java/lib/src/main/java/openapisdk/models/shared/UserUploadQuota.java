package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserUploadQuota
 * Appears only when the user has upload access and is looking at their own user record.
**/
public class UserUploadQuota {
    @JsonProperty("lifetime")
    public UserUploadQuotaLifetime lifetime;
    public UserUploadQuota withLifetime(UserUploadQuotaLifetime lifetime) {
        this.lifetime = lifetime;
        return this;
    }
    @JsonProperty("periodic")
    public UserUploadQuotaPeriodic periodic;
    public UserUploadQuota withPeriodic(UserUploadQuotaPeriodic periodic) {
        this.periodic = periodic;
        return this;
    }
    @JsonProperty("space")
    public UserUploadQuotaSpace space;
    public UserUploadQuota withSpace(UserUploadQuotaSpace space) {
        this.space = space;
        return this;
    }
}