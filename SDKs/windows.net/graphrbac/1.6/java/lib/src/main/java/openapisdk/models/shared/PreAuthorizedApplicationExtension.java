package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PreAuthorizedApplicationExtension
 * Representation of an app PreAuthorizedApplicationExtension required by a pre authorized client app.
**/
public class PreAuthorizedApplicationExtension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public String[] conditions;
    public PreAuthorizedApplicationExtension withConditions(String[] conditions) {
        this.conditions = conditions;
        return this;
    }
}