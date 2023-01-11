package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFlowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetFlowQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}