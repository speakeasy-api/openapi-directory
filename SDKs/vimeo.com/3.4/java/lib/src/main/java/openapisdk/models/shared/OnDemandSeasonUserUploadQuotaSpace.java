package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserUploadQuotaSpace
 * Information about the user's upload space remaining for the current period.
**/
public class OnDemandSeasonUserUploadQuotaSpace {
    @JsonProperty("free")
    public Double free;
    public OnDemandSeasonUserUploadQuotaSpace withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public OnDemandSeasonUserUploadQuotaSpace withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("showing")
    public OnDemandSeasonUserUploadQuotaSpaceShowingEnum showing;
    public OnDemandSeasonUserUploadQuotaSpace withShowing(OnDemandSeasonUserUploadQuotaSpaceShowingEnum showing) {
        this.showing = showing;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public OnDemandSeasonUserUploadQuotaSpace withUsed(Double used) {
        this.used = used;
        return this;
    }
}