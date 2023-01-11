package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserUploadQuotaSpace
 * Information about the user's upload space remaining for the current period.
**/
public class OnDemandPageUserUploadQuotaSpace {
    @JsonProperty("free")
    public Double free;
    public OnDemandPageUserUploadQuotaSpace withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public OnDemandPageUserUploadQuotaSpace withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("showing")
    public OnDemandPageUserUploadQuotaSpaceShowingEnum showing;
    public OnDemandPageUserUploadQuotaSpace withShowing(OnDemandPageUserUploadQuotaSpaceShowingEnum showing) {
        this.showing = showing;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public OnDemandPageUserUploadQuotaSpace withUsed(Double used) {
        this.used = used;
        return this;
    }
}