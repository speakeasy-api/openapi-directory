package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserUploadQuotaSpace
 * Information about the user's upload space remaining for the current period.
**/
public class GroupUserUploadQuotaSpace {
    @JsonProperty("free")
    public Double free;
    public GroupUserUploadQuotaSpace withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public GroupUserUploadQuotaSpace withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("showing")
    public GroupUserUploadQuotaSpaceShowingEnum showing;
    public GroupUserUploadQuotaSpace withShowing(GroupUserUploadQuotaSpaceShowingEnum showing) {
        this.showing = showing;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public GroupUserUploadQuotaSpace withUsed(Double used) {
        this.used = used;
        return this;
    }
}