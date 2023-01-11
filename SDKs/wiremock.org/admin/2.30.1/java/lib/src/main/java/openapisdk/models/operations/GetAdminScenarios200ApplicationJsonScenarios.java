package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminScenarios200ApplicationJsonScenarios {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAdminScenarios200ApplicationJsonScenarios withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetAdminScenarios200ApplicationJsonScenarios withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("possibleStates")
    public String[] possibleStates;
    public GetAdminScenarios200ApplicationJsonScenarios withPossibleStates(String[] possibleStates) {
        this.possibleStates = possibleStates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public GetAdminScenarios200ApplicationJsonScenarios withState(String state) {
        this.state = state;
        return this;
    }
}