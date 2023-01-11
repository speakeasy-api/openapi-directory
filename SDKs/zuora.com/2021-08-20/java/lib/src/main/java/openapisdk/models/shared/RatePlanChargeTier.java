package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class RatePlanChargeTier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public RatePlanChargeTier withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public RatePlanChargeTier withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndingUnit")
    public Double endingUnit;
    public RatePlanChargeTier withEndingUnit(Double endingUnit) {
        this.endingUnit = endingUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IsOveragePrice")
    public Boolean isOveragePrice;
    public RatePlanChargeTier withIsOveragePrice(Boolean isOveragePrice) {
        this.isOveragePrice = isOveragePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public Double price;
    public RatePlanChargeTier withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PriceFormat")
    public RatePlanChargeTierPriceFormatEnum priceFormat;
    public RatePlanChargeTier withPriceFormat(RatePlanChargeTierPriceFormatEnum priceFormat) {
        this.priceFormat = priceFormat;
        return this;
    }
    @JsonProperty("RatePlanChargeId")
    public String ratePlanChargeId;
    public RatePlanChargeTier withRatePlanChargeId(String ratePlanChargeId) {
        this.ratePlanChargeId = ratePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartingUnit")
    public Double startingUnit;
    public RatePlanChargeTier withStartingUnit(Double startingUnit) {
        this.startingUnit = startingUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tier")
    public Integer tier;
    public RatePlanChargeTier withTier(Integer tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public RatePlanChargeTier withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public RatePlanChargeTier withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}