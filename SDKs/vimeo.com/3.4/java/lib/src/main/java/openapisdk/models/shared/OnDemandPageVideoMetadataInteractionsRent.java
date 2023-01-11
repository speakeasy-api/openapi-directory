package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataInteractionsRent
 * The Rent interaction for an On Demand video.
**/
public class OnDemandPageVideoMetadataInteractionsRent {
    @JsonProperty("currency")
    public String currency;
    public OnDemandPageVideoMetadataInteractionsRent withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("display_price")
    public String displayPrice;
    public OnDemandPageVideoMetadataInteractionsRent withDisplayPrice(String displayPrice) {
        this.displayPrice = displayPrice;
        return this;
    }
    @JsonProperty("drm")
    public Boolean drm;
    public OnDemandPageVideoMetadataInteractionsRent withDrm(Boolean drm) {
        this.drm = drm;
        return this;
    }
    @JsonProperty("expires_time")
    public String expiresTime;
    public OnDemandPageVideoMetadataInteractionsRent withExpiresTime(String expiresTime) {
        this.expiresTime = expiresTime;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPageVideoMetadataInteractionsRent withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("price")
    public Double price;
    public OnDemandPageVideoMetadataInteractionsRent withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonProperty("purchase_time")
    public String purchaseTime;
    public OnDemandPageVideoMetadataInteractionsRent withPurchaseTime(String purchaseTime) {
        this.purchaseTime = purchaseTime;
        return this;
    }
    @JsonProperty("stream")
    public OnDemandPageVideoMetadataInteractionsRentStreamEnum stream;
    public OnDemandPageVideoMetadataInteractionsRent withStream(OnDemandPageVideoMetadataInteractionsRentStreamEnum stream) {
        this.stream = stream;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataInteractionsRent withUri(String uri) {
        this.uri = uri;
        return this;
    }
}