package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPastWebinarQaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public ListPastWebinarQaPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}