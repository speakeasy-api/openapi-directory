package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InMeetingRecordingControlMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=method")
    public String method;
    public InMeetingRecordingControlMultipartFormData withMethod(String method) {
        this.method = method;
        return this;
    }
}