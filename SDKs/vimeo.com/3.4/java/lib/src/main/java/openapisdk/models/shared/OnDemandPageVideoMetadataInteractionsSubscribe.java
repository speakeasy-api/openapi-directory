package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageVideoMetadataInteractionsSubscribe
 * Subscription information for an On Demand video.
**/
public class OnDemandPageVideoMetadataInteractionsSubscribe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drm")
    public Boolean drm;
    public OnDemandPageVideoMetadataInteractionsSubscribe withDrm(Boolean drm) {
        this.drm = drm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_time")
    public String expiresTime;
    public OnDemandPageVideoMetadataInteractionsSubscribe withExpiresTime(String expiresTime) {
        this.expiresTime = expiresTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_time")
    public String purchaseTime;
    public OnDemandPageVideoMetadataInteractionsSubscribe withPurchaseTime(String purchaseTime) {
        this.purchaseTime = purchaseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream")
    public String stream;
    public OnDemandPageVideoMetadataInteractionsSubscribe withStream(String stream) {
        this.stream = stream;
        return this;
    }
}