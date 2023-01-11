package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Bet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delayedBetId")
    public String delayedBetId;
    public Bet withDelayedBetId(String delayedBetId) {
        this.delayedBetId = delayedBetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeBetId")
    public String freeBetId;
    public Bet withFreeBetId(String freeBetId) {
        this.freeBetId = freeBetId;
        return this;
    }
    @JsonProperty("legs")
    public Leg[] legs;
    public Bet withLegs(Leg[] legs) {
        this.legs = legs;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public Bet withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("stake")
    public Double stake;
    public Bet withStake(Double stake) {
        this.stake = stake;
        return this;
    }
    @JsonProperty("typeCode")
    public String typeCode;
    public Bet withTypeCode(String typeCode) {
        this.typeCode = typeCode;
        return this;
    }
}