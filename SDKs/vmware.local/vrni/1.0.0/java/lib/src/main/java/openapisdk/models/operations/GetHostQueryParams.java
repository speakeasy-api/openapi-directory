package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetHostQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}