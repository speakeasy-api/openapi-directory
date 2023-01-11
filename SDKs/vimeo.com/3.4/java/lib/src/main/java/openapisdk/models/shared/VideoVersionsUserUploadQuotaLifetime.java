package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserUploadQuotaLifetime
 * Information about the user's lifetime upload usage.
**/
public class VideoVersionsUserUploadQuotaLifetime {
    @JsonProperty("free")
    public Double free;
    public VideoVersionsUserUploadQuotaLifetime withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public VideoVersionsUserUploadQuotaLifetime withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public VideoVersionsUserUploadQuotaLifetime withUsed(Double used) {
        this.used = used;
        return this;
    }
}