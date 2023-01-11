package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChargeTier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endingUnit")
    public Double endingUnit;
    public ChargeTier withEndingUnit(Double endingUnit) {
        this.endingUnit = endingUnit;
        return this;
    }
    @JsonProperty("price")
    public Double price;
    public ChargeTier withPrice(Double price) {
        this.price = price;
        return this;
    }
    @JsonProperty("priceFormat")
    public ChargeTierPriceFormatEnum priceFormat;
    public ChargeTier withPriceFormat(ChargeTierPriceFormatEnum priceFormat) {
        this.priceFormat = priceFormat;
        return this;
    }
    @JsonProperty("startingUnit")
    public Double startingUnit;
    public ChargeTier withStartingUnit(Double startingUnit) {
        this.startingUnit = startingUnit;
        return this;
    }
    @JsonProperty("tier")
    public Long tier;
    public ChargeTier withTier(Long tier) {
        this.tier = tier;
        return this;
    }
}