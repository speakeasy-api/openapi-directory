package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingLiveStreamStatusUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingLiveStreamStatusUpdateApplicationJson object;
    public MeetingLiveStreamStatusUpdateRequests withObject(MeetingLiveStreamStatusUpdateApplicationJson object) {
        this.object = object;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingLiveStreamStatusUpdateMultipartFormData object1;
    public MeetingLiveStreamStatusUpdateRequests withObject1(MeetingLiveStreamStatusUpdateMultipartFormData object1) {
        this.object1 = object1;
        return this;
    }
}