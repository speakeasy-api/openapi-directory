package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ProxyGetProductRatePlanChargeTier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedById")
    public String createdById;
    public ProxyGetProductRatePlanChargeTier withCreatedById(String createdById) {
        this.createdById = createdById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public ProxyGetProductRatePlanChargeTier withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Currency")
    public String currency;
    public ProxyGetProductRatePlanChargeTier withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndingUnit")
    public Double endingUnit;
    public ProxyGetProductRatePlanChargeTier withEndingUnit(Double endingUnit) {
        this.endingUnit = endingUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ProxyGetProductRatePlanChargeTier withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public Double price;
    public ProxyGetProductRatePlanChargeTier withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PriceFormat")
    public String priceFormat;
    public ProxyGetProductRatePlanChargeTier withPriceFormat(String priceFormat) {
        this.priceFormat = priceFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartingUnit")
    public Double startingUnit;
    public ProxyGetProductRatePlanChargeTier withStartingUnit(Double startingUnit) {
        this.startingUnit = startingUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tier")
    public Integer tier;
    public ProxyGetProductRatePlanChargeTier withTier(Integer tier) {
        this.tier = tier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdatedById")
    public String updatedById;
    public ProxyGetProductRatePlanChargeTier withUpdatedById(String updatedById) {
        this.updatedById = updatedById;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedDate")
    public OffsetDateTime updatedDate;
    public ProxyGetProductRatePlanChargeTier withUpdatedDate(OffsetDateTime updatedDate) {
        this.updatedDate = updatedDate;
        return this;
    }
}