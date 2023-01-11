package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingPollUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingPollUpdatePoll poll;
    public MeetingPollUpdateRequests withPoll(MeetingPollUpdatePoll poll) {
        this.poll = poll;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingPollUpdatePoll poll1;
    public MeetingPollUpdateRequests withPoll1(MeetingPollUpdatePoll poll1) {
        this.poll1 = poll1;
        return this;
    }
}