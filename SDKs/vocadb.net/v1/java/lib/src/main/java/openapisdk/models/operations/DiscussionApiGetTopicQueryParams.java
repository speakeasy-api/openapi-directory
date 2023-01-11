package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscussionApiGetTopicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public DiscussionApiGetTopicFieldsEnum fields;
    public DiscussionApiGetTopicQueryParams withFields(DiscussionApiGetTopicFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
}