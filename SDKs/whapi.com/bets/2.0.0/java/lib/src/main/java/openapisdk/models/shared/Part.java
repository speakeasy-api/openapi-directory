package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Part {
    @JsonProperty("includeInMultiple")
    public Boolean includeInMultiple;
    public Part withIncludeInMultiple(Boolean includeInMultiple) {
        this.includeInMultiple = includeInMultiple;
        return this;
    }
    @JsonProperty("priceDen")
    public Long priceDen;
    public Part withPriceDen(Long priceDen) {
        this.priceDen = priceDen;
        return this;
    }
    @JsonProperty("priceNum")
    public Long priceNum;
    public Part withPriceNum(Long priceNum) {
        this.priceNum = priceNum;
        return this;
    }
    @JsonProperty("priceType")
    public Long priceType;
    public Part withPriceType(Long priceType) {
        this.priceType = priceType;
        return this;
    }
    @JsonProperty("selectionId")
    public Long selectionId;
    public Part withSelectionId(Long selectionId) {
        this.selectionId = selectionId;
        return this;
    }
}