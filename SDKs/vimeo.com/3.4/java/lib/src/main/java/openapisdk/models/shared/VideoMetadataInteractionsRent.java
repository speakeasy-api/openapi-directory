package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataInteractionsRent
 * The Rent interaction for an On Demand video.
**/
public class VideoMetadataInteractionsRent {
    @JsonProperty("currency")
    public String currency;
    public VideoMetadataInteractionsRent withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("display_price")
    public String displayPrice;
    public VideoMetadataInteractionsRent withDisplayPrice(String displayPrice) {
        this.displayPrice = displayPrice;
        return this;
    }
    @JsonProperty("drm")
    public Boolean drm;
    public VideoMetadataInteractionsRent withDrm(Boolean drm) {
        this.drm = drm;
        return this;
    }
    @JsonProperty("expires_time")
    public String expiresTime;
    public VideoMetadataInteractionsRent withExpiresTime(String expiresTime) {
        this.expiresTime = expiresTime;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public VideoMetadataInteractionsRent withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("price")
    public Double price;
    public VideoMetadataInteractionsRent withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonProperty("purchase_time")
    public String purchaseTime;
    public VideoMetadataInteractionsRent withPurchaseTime(String purchaseTime) {
        this.purchaseTime = purchaseTime;
        return this;
    }
    @JsonProperty("stream")
    public VideoMetadataInteractionsRentStreamEnum stream;
    public VideoMetadataInteractionsRent withStream(VideoMetadataInteractionsRentStreamEnum stream) {
        this.stream = stream;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataInteractionsRent withUri(String uri) {
        this.uri = uri;
        return this;
    }
}