package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserUploadQuotaLifetime
 * Information about the user's lifetime upload usage.
**/
public class VideoUserUploadQuotaLifetime {
    @JsonProperty("free")
    public Double free;
    public VideoUserUploadQuotaLifetime withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public VideoUserUploadQuotaLifetime withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public VideoUserUploadQuotaLifetime withUsed(Double used) {
        this.used = used;
        return this;
    }
}