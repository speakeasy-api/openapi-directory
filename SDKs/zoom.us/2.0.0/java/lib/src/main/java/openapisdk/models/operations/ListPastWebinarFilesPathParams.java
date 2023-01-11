package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPastWebinarFilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public ListPastWebinarFilesPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}