package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarPollDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pollId")
    public String pollId;
    public WebinarPollDeletePathParams withPollId(String pollId) {
        this.pollId = pollId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=webinarId")
    public Long webinarId;
    public WebinarPollDeletePathParams withWebinarId(Long webinarId) {
        this.webinarId = webinarId;
        return this;
    }
}