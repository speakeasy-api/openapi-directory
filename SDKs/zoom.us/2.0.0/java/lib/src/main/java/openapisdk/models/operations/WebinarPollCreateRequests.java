package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPollCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public WebinarPollCreatePoll poll;
    public WebinarPollCreateRequests withPoll(WebinarPollCreatePoll poll) {
        this.poll = poll;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public WebinarPollCreatePoll poll1;
    public WebinarPollCreateRequests withPoll1(WebinarPollCreatePoll poll1) {
        this.poll1 = poll1;
        return this;
    }
}