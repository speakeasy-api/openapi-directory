package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscussionApiDeleteTopicPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=topicId")
    public Integer topicId;
    public DiscussionApiDeleteTopicPathParams withTopicId(Integer topicId) {
        this.topicId = topicId;
        return this;
    }
}