package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardClientFeedbackDetailPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=feedbackId")
    public String feedbackId;
    public DashboardClientFeedbackDetailPathParams withFeedbackId(String feedbackId) {
        this.feedbackId = feedbackId;
        return this;
    }
}