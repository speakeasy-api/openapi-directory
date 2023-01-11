package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarPanelistCreateApplicationJsonPanelists
 * Panelist base object.
**/
public class WebinarPanelistCreateApplicationJsonPanelists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public WebinarPanelistCreateApplicationJsonPanelists withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebinarPanelistCreateApplicationJsonPanelists withName(String name) {
        this.name = name;
        return this;
    }
}