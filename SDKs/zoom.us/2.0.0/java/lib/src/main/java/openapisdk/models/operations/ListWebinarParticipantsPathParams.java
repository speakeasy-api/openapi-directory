package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebinarParticipantsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public ListWebinarParticipantsPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}