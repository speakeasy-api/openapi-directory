package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscussionApiGetTopicPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=topicId")
    public Integer topicId;
    public DiscussionApiGetTopicPathParams withTopicId(Integer topicId) {
        this.topicId = topicId;
        return this;
    }
}