package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

/**
 * WebinarPanelistCreateMultipartFormData1
 * Webinar panelist.
**/
public class WebinarPanelistCreateMultipartFormData1 {
    @SpeakeasyMetadata("multipartForm:name=panelists,json")
    public WebinarPanelistCreateMultipartFormDataPanelists[] panelists;
    public WebinarPanelistCreateMultipartFormData1 withPanelists(WebinarPanelistCreateMultipartFormDataPanelists[] panelists) {
        this.panelists = panelists;
        return this;
    }
}