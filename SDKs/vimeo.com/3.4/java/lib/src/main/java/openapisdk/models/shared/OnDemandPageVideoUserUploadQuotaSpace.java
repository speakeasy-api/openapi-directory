package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserUploadQuotaSpace
 * Information about the user's upload space remaining for the current period.
**/
public class OnDemandPageVideoUserUploadQuotaSpace {
    @JsonProperty("free")
    public Double free;
    public OnDemandPageVideoUserUploadQuotaSpace withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public OnDemandPageVideoUserUploadQuotaSpace withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("showing")
    public OnDemandPageVideoUserUploadQuotaSpaceShowingEnum showing;
    public OnDemandPageVideoUserUploadQuotaSpace withShowing(OnDemandPageVideoUserUploadQuotaSpaceShowingEnum showing) {
        this.showing = showing;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public OnDemandPageVideoUserUploadQuotaSpace withUsed(Double used) {
        this.used = used;
        return this;
    }
}