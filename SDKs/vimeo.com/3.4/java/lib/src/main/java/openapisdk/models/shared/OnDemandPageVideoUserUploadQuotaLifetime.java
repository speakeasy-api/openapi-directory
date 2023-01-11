package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserUploadQuotaLifetime
 * Information about the user's lifetime upload usage.
**/
public class OnDemandPageVideoUserUploadQuotaLifetime {
    @JsonProperty("free")
    public Double free;
    public OnDemandPageVideoUserUploadQuotaLifetime withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public OnDemandPageVideoUserUploadQuotaLifetime withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public OnDemandPageVideoUserUploadQuotaLifetime withUsed(Double used) {
        this.used = used;
        return this;
    }
}