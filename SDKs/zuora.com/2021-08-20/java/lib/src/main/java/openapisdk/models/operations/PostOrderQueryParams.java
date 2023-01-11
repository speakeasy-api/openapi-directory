package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostOrderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=returnIds")
    public Boolean returnIds;
    public PostOrderQueryParams withReturnIds(Boolean returnIds) {
        this.returnIds = returnIds;
        return this;
    }
}