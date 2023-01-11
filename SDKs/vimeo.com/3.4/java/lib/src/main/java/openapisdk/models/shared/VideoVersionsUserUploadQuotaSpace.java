package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoVersionsUserUploadQuotaSpace
 * Information about the user's upload space remaining for the current period.
**/
public class VideoVersionsUserUploadQuotaSpace {
    @JsonProperty("free")
    public Double free;
    public VideoVersionsUserUploadQuotaSpace withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public VideoVersionsUserUploadQuotaSpace withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("showing")
    public VideoVersionsUserUploadQuotaSpaceShowingEnum showing;
    public VideoVersionsUserUploadQuotaSpace withShowing(VideoVersionsUserUploadQuotaSpaceShowingEnum showing) {
        this.showing = showing;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public VideoVersionsUserUploadQuotaSpace withUsed(Double used) {
        this.used = used;
        return this;
    }
}