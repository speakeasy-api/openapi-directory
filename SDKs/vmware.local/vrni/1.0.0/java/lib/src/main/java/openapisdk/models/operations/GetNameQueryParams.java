package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetNameQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}