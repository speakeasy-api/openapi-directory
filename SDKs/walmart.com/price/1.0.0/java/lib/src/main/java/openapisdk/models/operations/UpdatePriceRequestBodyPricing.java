package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdatePriceRequestBodyPricing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonPrice")
    public UpdatePriceRequestBodyPricingComparisonPrice comparisonPrice;
    public UpdatePriceRequestBodyPricing withComparisonPrice(UpdatePriceRequestBodyPricingComparisonPrice comparisonPrice) {
        this.comparisonPrice = comparisonPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comparisonPriceType")
    public UpdatePriceRequestBodyPricingComparisonPriceTypeEnum comparisonPriceType;
    public UpdatePriceRequestBodyPricing withComparisonPriceType(UpdatePriceRequestBodyPricingComparisonPriceTypeEnum comparisonPriceType) {
        this.comparisonPriceType = comparisonPriceType;
        return this;
    }
    @JsonProperty("currentPrice")
    public UpdatePriceRequestBodyPricingCurrentPrice currentPrice;
    public UpdatePriceRequestBodyPricing withCurrentPrice(UpdatePriceRequestBodyPricingCurrentPrice currentPrice) {
        this.currentPrice = currentPrice;
        return this;
    }
    @JsonProperty("currentPriceType")
    public UpdatePriceRequestBodyPricingCurrentPriceTypeEnum currentPriceType;
    public UpdatePriceRequestBodyPricing withCurrentPriceType(UpdatePriceRequestBodyPricingCurrentPriceTypeEnum currentPriceType) {
        this.currentPriceType = currentPriceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("effectiveDate")
    public OffsetDateTime effectiveDate;
    public UpdatePriceRequestBodyPricing withEffectiveDate(OffsetDateTime effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expirationDate")
    public OffsetDateTime expirationDate;
    public UpdatePriceRequestBodyPricing withExpirationDate(OffsetDateTime expirationDate) {
        this.expirationDate = expirationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceDisplayCodes")
    public UpdatePriceRequestBodyPricingPriceDisplayCodesEnum priceDisplayCodes;
    public UpdatePriceRequestBodyPricing withPriceDisplayCodes(UpdatePriceRequestBodyPricingPriceDisplayCodesEnum priceDisplayCodes) {
        this.priceDisplayCodes = priceDisplayCodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processMode")
    public UpdatePriceRequestBodyPricingProcessModeEnum processMode;
    public UpdatePriceRequestBodyPricing withProcessMode(UpdatePriceRequestBodyPricingProcessModeEnum processMode) {
        this.processMode = processMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promoId")
    public String promoId;
    public UpdatePriceRequestBodyPricing withPromoId(String promoId) {
        this.promoId = promoId;
        return this;
    }
}