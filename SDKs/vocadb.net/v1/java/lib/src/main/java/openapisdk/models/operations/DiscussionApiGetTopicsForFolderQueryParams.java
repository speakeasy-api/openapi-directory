package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscussionApiGetTopicsForFolderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public DiscussionApiGetTopicsForFolderFieldsEnum fields;
    public DiscussionApiGetTopicsForFolderQueryParams withFields(DiscussionApiGetTopicsForFolderFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
}