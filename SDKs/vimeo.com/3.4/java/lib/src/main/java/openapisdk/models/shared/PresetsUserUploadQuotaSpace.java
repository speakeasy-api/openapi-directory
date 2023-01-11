package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserUploadQuotaSpace
 * Information about the user's upload space remaining for the current period.
**/
public class PresetsUserUploadQuotaSpace {
    @JsonProperty("free")
    public Double free;
    public PresetsUserUploadQuotaSpace withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public PresetsUserUploadQuotaSpace withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("showing")
    public PresetsUserUploadQuotaSpaceShowingEnum showing;
    public PresetsUserUploadQuotaSpace withShowing(PresetsUserUploadQuotaSpaceShowingEnum showing) {
        this.showing = showing;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public PresetsUserUploadQuotaSpace withUsed(Double used) {
        this.used = used;
        return this;
    }
}