package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Solution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("betNum")
    public String betNum;
    public Solution withBetNum(String betNum) {
        this.betNum = betNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventId")
    public String eventId;
    public Solution withEventId(String eventId) {
        this.eventId = eventId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handicap")
    public String handicap;
    public Solution withHandicap(String handicap) {
        this.handicap = handicap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("handicapPrecision")
    public String handicapPrecision;
    public Solution withHandicapPrecision(String handicapPrecision) {
        this.handicapPrecision = handicapPrecision;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceDen")
    public String priceDen;
    public Solution withPriceDen(String priceDen) {
        this.priceDen = priceDen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priceNum")
    public String priceNum;
    public Solution withPriceNum(String priceNum) {
        this.priceNum = priceNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionHandicap")
    public String selectionHandicap;
    public Solution withSelectionHandicap(String selectionHandicap) {
        this.selectionHandicap = selectionHandicap;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionId")
    public String selectionId;
    public Solution withSelectionId(String selectionId) {
        this.selectionId = selectionId;
        return this;
    }
}