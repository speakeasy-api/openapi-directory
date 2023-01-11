package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoUserUploadQuotaSpace
 * Information about the user's upload space remaining for the current period.
**/
public class VideoUserUploadQuotaSpace {
    @JsonProperty("free")
    public Double free;
    public VideoUserUploadQuotaSpace withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public VideoUserUploadQuotaSpace withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("showing")
    public VideoUserUploadQuotaSpaceShowingEnum showing;
    public VideoUserUploadQuotaSpace withShowing(VideoUserUploadQuotaSpaceShowingEnum showing) {
        this.showing = showing;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public VideoUserUploadQuotaSpace withUsed(Double used) {
        this.used = used;
        return this;
    }
}