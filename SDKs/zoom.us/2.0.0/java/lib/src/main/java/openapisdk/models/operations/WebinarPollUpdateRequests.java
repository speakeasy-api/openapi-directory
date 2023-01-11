package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPollUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WebinarPollUpdatePoll poll;
    public WebinarPollUpdateRequests withPoll(WebinarPollUpdatePoll poll) {
        this.poll = poll;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public WebinarPollUpdatePoll poll1;
    public WebinarPollUpdateRequests withPoll1(WebinarPollUpdatePoll poll1) {
        this.poll1 = poll1;
        return this;
    }
}