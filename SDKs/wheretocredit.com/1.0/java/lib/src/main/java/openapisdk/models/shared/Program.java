package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Program {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airlines")
    public String[] airlines;
    public Program withAirlines(String[] airlines) {
        this.airlines = airlines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("denomination")
    public String denomination;
    public Program withDenomination(String denomination) {
        this.denomination = denomination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullName")
    public String fullName;
    public Program withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Program withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("programName")
    public String programName;
    public Program withProgramName(String programName) {
        this.programName = programName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tierNames")
    public String[] tierNames;
    public Program withTierNames(String[] tierNames) {
        this.tierNames = tierNames;
        return this;
    }
}