package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingStatusMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=action")
    public MeetingStatusMultipartFormDataActionEnum action;
    public MeetingStatusMultipartFormData withAction(MeetingStatusMultipartFormDataActionEnum action) {
        this.action = action;
        return this;
    }
}