package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminScenarios200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scenarios")
    public GetAdminScenarios200ApplicationJsonScenarios[] scenarios;
    public GetAdminScenarios200ApplicationJson withScenarios(GetAdminScenarios200ApplicationJsonScenarios[] scenarios) {
        this.scenarios = scenarios;
        return this;
    }
}