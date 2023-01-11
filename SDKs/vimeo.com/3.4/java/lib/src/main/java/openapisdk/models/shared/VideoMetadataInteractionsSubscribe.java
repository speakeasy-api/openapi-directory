package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoMetadataInteractionsSubscribe
 * Subscription information for an On Demand video.
**/
public class VideoMetadataInteractionsSubscribe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drm")
    public Boolean drm;
    public VideoMetadataInteractionsSubscribe withDrm(Boolean drm) {
        this.drm = drm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_time")
    public String expiresTime;
    public VideoMetadataInteractionsSubscribe withExpiresTime(String expiresTime) {
        this.expiresTime = expiresTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_time")
    public String purchaseTime;
    public VideoMetadataInteractionsSubscribe withPurchaseTime(String purchaseTime) {
        this.purchaseTime = purchaseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream")
    public String stream;
    public VideoMetadataInteractionsSubscribe withStream(String stream) {
        this.stream = stream;
        return this;
    }
}