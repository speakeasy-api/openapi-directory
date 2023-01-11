package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPromotion {
    @JsonProperty("access_type")
    public OnDemandPromotionAccessTypeEnum accessType;
    public OnDemandPromotion withAccessType(OnDemandPromotionAccessTypeEnum accessType) {
        this.accessType = accessType;
        return this;
    }
    @JsonProperty("discount_type")
    public OnDemandPromotionDiscountTypeEnum discountType;
    public OnDemandPromotion withDiscountType(OnDemandPromotionDiscountTypeEnum discountType) {
        this.discountType = discountType;
        return this;
    }
    @JsonProperty("download")
    public Boolean download;
    public OnDemandPromotion withDownload(Boolean download) {
        this.download = download;
        return this;
    }
    @JsonProperty("label")
    public String label;
    public OnDemandPromotion withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandPromotionMetadata metadata;
    public OnDemandPromotion withMetadata(OnDemandPromotionMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("percent_off")
    public Double percentOff;
    public OnDemandPromotion withPercentOff(Double percentOff) {
        this.percentOff = percentOff;
        return this;
    }
    @JsonProperty("product_type")
    public OnDemandPromotionProductTypeEnum productType;
    public OnDemandPromotion withProductType(OnDemandPromotionProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @JsonProperty("stream_period")
    public OnDemandPromotionStreamPeriodEnum streamPeriod;
    public OnDemandPromotion withStreamPeriod(OnDemandPromotionStreamPeriodEnum streamPeriod) {
        this.streamPeriod = streamPeriod;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPromotion withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("type")
    public OnDemandPromotionTypeEnum type;
    public OnDemandPromotion withType(OnDemandPromotionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPromotion withUri(String uri) {
        this.uri = uri;
        return this;
    }
}