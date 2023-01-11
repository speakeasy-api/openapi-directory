package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WebinarPanelistsPanelistList
 * List of panelists.
**/
public class WebinarPanelistsPanelistList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("panelists")
    public WebinarPanelistsPanelistListPanelists[] panelists;
    public WebinarPanelistsPanelistList withPanelists(WebinarPanelistsPanelistListPanelists[] panelists) {
        this.panelists = panelists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_records")
    public Long totalRecords;
    public WebinarPanelistsPanelistList withTotalRecords(Long totalRecords) {
        this.totalRecords = totalRecords;
        return this;
    }
}