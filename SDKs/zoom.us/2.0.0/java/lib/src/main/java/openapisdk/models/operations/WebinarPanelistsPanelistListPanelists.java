package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarPanelistsPanelistListPanelists
 * Panelist base object.
**/
public class WebinarPanelistsPanelistListPanelists {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public WebinarPanelistsPanelistListPanelists withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public WebinarPanelistsPanelistListPanelists withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_url")
    public String joinUrl;
    public WebinarPanelistsPanelistListPanelists withJoinUrl(String joinUrl) {
        this.joinUrl = joinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WebinarPanelistsPanelistListPanelists withName(String name) {
        this.name = name;
        return this;
    }
}