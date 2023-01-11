package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Betslipbet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("betMultiplier")
    public Double betMultiplier;
    public Betslipbet withBetMultiplier(Double betMultiplier) {
        this.betMultiplier = betMultiplier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("freeBets")
    public FreeBetDetail[] freeBets;
    public Betslipbet withFreeBets(FreeBetDetail[] freeBets) {
        this.freeBets = freeBets;
        return this;
    }
    @JsonProperty("legs")
    public Betslipleg[] legs;
    public Betslipbet withLegs(Betslipleg[] legs) {
        this.legs = legs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxStake")
    public Double maxStake;
    public Betslipbet withMaxStake(Double maxStake) {
        this.maxStake = maxStake;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minStake")
    public Double minStake;
    public Betslipbet withMinStake(Double minStake) {
        this.minStake = minStake;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numLines")
    public Double numLines;
    public Betslipbet withNumLines(Double numLines) {
        this.numLines = numLines;
        return this;
    }
    @JsonProperty("number")
    public Long number;
    public Betslipbet withNumber(Long number) {
        this.number = number;
        return this;
    }
    @JsonProperty("typeCode")
    public String typeCode;
    public Betslipbet withTypeCode(String typeCode) {
        this.typeCode = typeCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("typeName")
    public String typeName;
    public Betslipbet withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}