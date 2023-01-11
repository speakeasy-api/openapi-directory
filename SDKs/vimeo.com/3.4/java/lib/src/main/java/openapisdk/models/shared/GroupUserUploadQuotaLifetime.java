package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserUploadQuotaLifetime
 * Information about the user's lifetime upload usage.
**/
public class GroupUserUploadQuotaLifetime {
    @JsonProperty("free")
    public Double free;
    public GroupUserUploadQuotaLifetime withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public GroupUserUploadQuotaLifetime withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public GroupUserUploadQuotaLifetime withUsed(Double used) {
        this.used = used;
        return this;
    }
}