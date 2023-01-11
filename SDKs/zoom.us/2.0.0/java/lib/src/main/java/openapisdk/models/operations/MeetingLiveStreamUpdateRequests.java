package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingLiveStreamUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingLiveStreamUpdateApplicationJson object;
    public MeetingLiveStreamUpdateRequests withObject(MeetingLiveStreamUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingLiveStreamUpdateMultipartFormData object1;
    public MeetingLiveStreamUpdateRequests withObject1(MeetingLiveStreamUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}