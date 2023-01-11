package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleBetRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delayedBetId")
    public String delayedBetId;
    public SingleBetRequestBody withDelayedBetId(String delayedBetId) {
        this.delayedBetId = delayedBetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeBetId")
    public String freeBetId;
    public SingleBetRequestBody withFreeBetId(String freeBetId) {
        this.freeBetId = freeBetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceDen")
    public Long priceDen;
    public SingleBetRequestBody withPriceDen(Long priceDen) {
        this.priceDen = priceDen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceNum")
    public Long priceNum;
    public SingleBetRequestBody withPriceNum(Long priceNum) {
        this.priceNum = priceNum;
        return this;
    }
    @JsonProperty("priceType")
    public String priceType;
    public SingleBetRequestBody withPriceType(String priceType) {
        this.priceType = priceType;
        return this;
    }
    @JsonProperty("selectionId")
    public String selectionId;
    public SingleBetRequestBody withSelectionId(String selectionId) {
        this.selectionId = selectionId;
        return this;
    }
    @JsonProperty("stake")
    public Double stake;
    public SingleBetRequestBody withStake(Double stake) {
        this.stake = stake;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public SingleBetRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}