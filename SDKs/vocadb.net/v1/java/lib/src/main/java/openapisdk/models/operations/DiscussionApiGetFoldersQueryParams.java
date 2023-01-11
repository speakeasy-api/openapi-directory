package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DiscussionApiGetFoldersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public DiscussionApiGetFoldersFieldsEnum fields;
    public DiscussionApiGetFoldersQueryParams withFields(DiscussionApiGetFoldersFieldsEnum fields) {
        this.fields = fields;
        return this;
    }
}