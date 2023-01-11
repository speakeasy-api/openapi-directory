package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateOrderAsynchronouslyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=returnIds")
    public Boolean returnIds;
    public PostCreateOrderAsynchronouslyQueryParams withReturnIds(Boolean returnIds) {
        this.returnIds = returnIds;
        return this;
    }
}