package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PurchaseInteractionSubscribe
 * Information on subscribing to this video.
**/
public class PurchaseInteractionSubscribe {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("drm")
    public Boolean drm;
    public PurchaseInteractionSubscribe withDrm(Boolean drm) {
        this.drm = drm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expires_time")
    public String expiresTime;
    public PurchaseInteractionSubscribe withExpiresTime(String expiresTime) {
        this.expiresTime = expiresTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public PurchaseInteractionSubscribe withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchase_time")
    public String purchaseTime;
    public PurchaseInteractionSubscribe withPurchaseTime(String purchaseTime) {
        this.purchaseTime = purchaseTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stream")
    public PurchaseInteractionSubscribeStreamEnum stream;
    public PurchaseInteractionSubscribe withStream(PurchaseInteractionSubscribeStreamEnum stream) {
        this.stream = stream;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uri")
    public String uri;
    public PurchaseInteractionSubscribe withUri(String uri) {
        this.uri = uri;
        return this;
    }
}