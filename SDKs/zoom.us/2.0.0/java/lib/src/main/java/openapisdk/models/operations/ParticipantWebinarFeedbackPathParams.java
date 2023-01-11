package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParticipantWebinarFeedbackPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public String webinarId;
    public ParticipantWebinarFeedbackPathParams withWebinarId(String webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}