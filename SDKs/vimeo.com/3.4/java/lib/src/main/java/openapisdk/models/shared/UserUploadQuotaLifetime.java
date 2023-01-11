package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserUploadQuotaLifetime
 * Information about the user's lifetime upload usage.
**/
public class UserUploadQuotaLifetime {
    @JsonProperty("free")
    public Double free;
    public UserUploadQuotaLifetime withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public UserUploadQuotaLifetime withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public UserUploadQuotaLifetime withUsed(Double used) {
        this.used = used;
        return this;
    }
}