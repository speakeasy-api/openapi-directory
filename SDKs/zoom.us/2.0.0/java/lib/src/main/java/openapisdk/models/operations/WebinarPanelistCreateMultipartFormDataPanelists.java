package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarPanelistCreateMultipartFormDataPanelists
 * Panelist base object.
**/
public class WebinarPanelistCreateMultipartFormDataPanelists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public WebinarPanelistCreateMultipartFormDataPanelists withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebinarPanelistCreateMultipartFormDataPanelists withName(String name) {
        this.name = name;
        return this;
    }
}