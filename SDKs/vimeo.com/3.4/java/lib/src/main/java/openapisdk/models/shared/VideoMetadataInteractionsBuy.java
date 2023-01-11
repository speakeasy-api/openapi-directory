package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoMetadataInteractionsBuy
 * The Buy interaction for a On Demand video.
**/
public class VideoMetadataInteractionsBuy {
    @JsonProperty("currency")
    public String currency;
    public VideoMetadataInteractionsBuy withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("display_price")
    public String displayPrice;
    public VideoMetadataInteractionsBuy withDisplayPrice(String displayPrice) {
        this.displayPrice = displayPrice;
        return this;
    }
    @JsonProperty("download")
    public VideoMetadataInteractionsBuyDownloadEnum download;
    public VideoMetadataInteractionsBuy withDownload(VideoMetadataInteractionsBuyDownloadEnum download) {
        this.download = download;
        return this;
    }
    @JsonProperty("drm")
    public Boolean drm;
    public VideoMetadataInteractionsBuy withDrm(Boolean drm) {
        this.drm = drm;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public VideoMetadataInteractionsBuy withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("price")
    public Double price;
    public VideoMetadataInteractionsBuy withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonProperty("purchase_time")
    public String purchaseTime;
    public VideoMetadataInteractionsBuy withPurchaseTime(String purchaseTime) {
        this.purchaseTime = purchaseTime;
        return this;
    }
    @JsonProperty("stream")
    public VideoMetadataInteractionsBuyStreamEnum stream;
    public VideoMetadataInteractionsBuy withStream(VideoMetadataInteractionsBuyStreamEnum stream) {
        this.stream = stream;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public VideoMetadataInteractionsBuy withUri(String uri) {
        this.uri = uri;
        return this;
    }
}