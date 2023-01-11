package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPollUpdatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pollId")
    public String pollId;
    public WebinarPollUpdatePathParams withPollId(String pollId) {
        this.pollId = pollId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarPollUpdatePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}