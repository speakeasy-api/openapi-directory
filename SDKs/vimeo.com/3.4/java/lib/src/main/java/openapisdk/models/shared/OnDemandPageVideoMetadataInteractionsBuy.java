package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadataInteractionsBuy
 * The Buy interaction for a On Demand video.
**/
public class OnDemandPageVideoMetadataInteractionsBuy {
    @JsonProperty("currency")
    public String currency;
    public OnDemandPageVideoMetadataInteractionsBuy withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("display_price")
    public String displayPrice;
    public OnDemandPageVideoMetadataInteractionsBuy withDisplayPrice(String displayPrice) {
        this.displayPrice = displayPrice;
        return this;
    }
    @JsonProperty("download")
    public OnDemandPageVideoMetadataInteractionsBuyDownloadEnum download;
    public OnDemandPageVideoMetadataInteractionsBuy withDownload(OnDemandPageVideoMetadataInteractionsBuyDownloadEnum download) {
        this.download = download;
        return this;
    }
    @JsonProperty("drm")
    public Boolean drm;
    public OnDemandPageVideoMetadataInteractionsBuy withDrm(Boolean drm) {
        this.drm = drm;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPageVideoMetadataInteractionsBuy withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("price")
    public Double price;
    public OnDemandPageVideoMetadataInteractionsBuy withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonProperty("purchase_time")
    public String purchaseTime;
    public OnDemandPageVideoMetadataInteractionsBuy withPurchaseTime(String purchaseTime) {
        this.purchaseTime = purchaseTime;
        return this;
    }
    @JsonProperty("stream")
    public OnDemandPageVideoMetadataInteractionsBuyStreamEnum stream;
    public OnDemandPageVideoMetadataInteractionsBuy withStream(OnDemandPageVideoMetadataInteractionsBuyStreamEnum stream) {
        this.stream = stream;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageVideoMetadataInteractionsBuy withUri(String uri) {
        this.uri = uri;
        return this;
    }
}