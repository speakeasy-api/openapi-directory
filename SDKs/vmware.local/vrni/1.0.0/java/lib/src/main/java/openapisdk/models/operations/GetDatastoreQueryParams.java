package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatastoreQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetDatastoreQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}