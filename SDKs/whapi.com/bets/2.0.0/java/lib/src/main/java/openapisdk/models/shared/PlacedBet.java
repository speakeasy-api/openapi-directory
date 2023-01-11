package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlacedBet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashinValue")
    public Double cashinValue;
    public PlacedBet withCashinValue(Double cashinValue) {
        this.cashinValue = cashinValue;
        return this;
    }
    @JsonProperty("estimatedReturns")
    public Double estimatedReturns;
    public PlacedBet withEstimatedReturns(Double estimatedReturns) {
        this.estimatedReturns = estimatedReturns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeBetValue")
    public Double freeBetValue;
    public PlacedBet withFreeBetValue(Double freeBetValue) {
        this.freeBetValue = freeBetValue;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public PlacedBet withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legs")
    public PlacedBetLeg[] legs;
    public PlacedBet withLegs(PlacedBetLeg[] legs) {
        this.legs = legs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numLines")
    public Long numLines;
    public PlacedBet withNumLines(Long numLines) {
        this.numLines = numLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numSelections")
    public Long numSelections;
    public PlacedBet withNumSelections(Long numSelections) {
        this.numSelections = numSelections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipt")
    public String receipt;
    public PlacedBet withReceipt(String receipt) {
        this.receipt = receipt;
        return this;
    }
    @JsonProperty("settled")
    public Boolean settled;
    public PlacedBet withSettled(Boolean settled) {
        this.settled = settled;
        return this;
    }
    @JsonProperty("stake")
    public Double stake;
    public PlacedBet withStake(Double stake) {
        this.stake = stake;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stakePerLine")
    public Double stakePerLine;
    public PlacedBet withStakePerLine(Double stakePerLine) {
        this.stakePerLine = stakePerLine;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public PlacedBet withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("transDateTime")
    public String transDateTime;
    public PlacedBet withTransDateTime(String transDateTime) {
        this.transDateTime = transDateTime;
        return this;
    }
    @JsonProperty("typeCode")
    public String typeCode;
    public PlacedBet withTypeCode(String typeCode) {
        this.typeCode = typeCode;
        return this;
    }
    @JsonProperty("typeName")
    public String typeName;
    public PlacedBet withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
    @JsonProperty("winnings")
    public Double winnings;
    public PlacedBet withWinnings(Double winnings) {
        this.winnings = winnings;
        return this;
    }
}