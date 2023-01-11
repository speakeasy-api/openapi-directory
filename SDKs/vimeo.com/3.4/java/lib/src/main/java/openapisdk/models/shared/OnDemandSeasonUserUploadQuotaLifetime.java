package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserUploadQuotaLifetime
 * Information about the user's lifetime upload usage.
**/
public class OnDemandSeasonUserUploadQuotaLifetime {
    @JsonProperty("free")
    public Double free;
    public OnDemandSeasonUserUploadQuotaLifetime withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public OnDemandSeasonUserUploadQuotaLifetime withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public OnDemandSeasonUserUploadQuotaLifetime withUsed(Double used) {
        this.used = used;
        return this;
    }
}