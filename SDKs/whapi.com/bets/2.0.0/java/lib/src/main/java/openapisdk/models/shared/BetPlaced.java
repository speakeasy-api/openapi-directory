package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BetPlaced {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public BetPlaced withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numLines")
    public Long numLines;
    public BetPlaced withNumLines(Long numLines) {
        this.numLines = numLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public Double number;
    public BetPlaced withNumber(Double number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placedDateTime")
    public String placedDateTime;
    public BetPlaced withPlacedDateTime(String placedDateTime) {
        this.placedDateTime = placedDateTime;
        return this;
    }
    @JsonProperty("receipt")
    public String receipt;
    public BetPlaced withReceipt(String receipt) {
        this.receipt = receipt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalStake")
    public Double totalStake;
    public BetPlaced withTotalStake(Double totalStake) {
        this.totalStake = totalStake;
        return this;
    }
}