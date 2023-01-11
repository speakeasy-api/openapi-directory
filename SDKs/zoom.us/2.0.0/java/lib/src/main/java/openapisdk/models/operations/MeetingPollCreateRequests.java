package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MeetingPollCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public MeetingPollCreatePoll poll;
    public MeetingPollCreateRequests withPoll(MeetingPollCreatePoll poll) {
        this.poll = poll;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public MeetingPollCreatePoll poll1;
    public MeetingPollCreateRequests withPoll1(MeetingPollCreatePoll poll1) {
        this.poll1 = poll1;
        return this;
    }
}