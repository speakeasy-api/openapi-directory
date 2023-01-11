package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserUploadQuotaLifetime
 * Information about the user's lifetime upload usage.
**/
public class OnDemandPageUserUploadQuotaLifetime {
    @JsonProperty("free")
    public Double free;
    public OnDemandPageUserUploadQuotaLifetime withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public OnDemandPageUserUploadQuotaLifetime withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public OnDemandPageUserUploadQuotaLifetime withUsed(Double used) {
        this.used = used;
        return this;
    }
}