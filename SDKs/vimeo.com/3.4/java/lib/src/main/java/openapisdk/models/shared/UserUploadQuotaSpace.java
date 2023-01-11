package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserUploadQuotaSpace
 * Information about the user's upload space remaining for the current period.
**/
public class UserUploadQuotaSpace {
    @JsonProperty("free")
    public Double free;
    public UserUploadQuotaSpace withFree(Double free) {
        this.free = free;
        return this;
    }
    @JsonProperty("max")
    public Double max;
    public UserUploadQuotaSpace withMax(Double max) {
        this.max = max;
        return this;
    }
    @JsonProperty("showing")
    public UserUploadQuotaSpaceShowingEnum showing;
    public UserUploadQuotaSpace withShowing(UserUploadQuotaSpaceShowingEnum showing) {
        this.showing = showing;
        return this;
    }
    @JsonProperty("used")
    public Double used;
    public UserUploadQuotaSpace withUsed(Double used) {
        this.used = used;
        return this;
    }
}