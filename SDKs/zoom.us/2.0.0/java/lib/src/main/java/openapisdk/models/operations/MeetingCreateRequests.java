package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingCreateApplicationJson object;
    public MeetingCreateRequests withObject(MeetingCreateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingCreateMultipartFormData1 object1;
    public MeetingCreateRequests withObject1(MeetingCreateMultipartFormData1 object1) {
        this.object1 = object1;
        return this;
    }
}