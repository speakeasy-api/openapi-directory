package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserUploadQuotaLifetime
 * Information about the user's lifetime upload usage.
**/
public class PresetsUserUploadQuotaLifetime {
    @JsonProperty("free")
    public Double free;
    public PresetsUserUploadQuotaLifetime withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public PresetsUserUploadQuotaLifetime withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public PresetsUserUploadQuotaLifetime withUsed(Double used) {
        this.used = used;
        return this;
    }
}