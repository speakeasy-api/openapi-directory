package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarPanelistCreateApplicationJson
 * Webinar panelist.
**/
public class WebinarPanelistCreateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelists")
    public WebinarPanelistCreateApplicationJsonPanelists[] panelists;
    public WebinarPanelistCreateApplicationJson withPanelists(WebinarPanelistCreateApplicationJsonPanelists[] panelists) {
        this.panelists = panelists;
        return this;
    }
}