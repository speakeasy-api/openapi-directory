package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProblemEventQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetProblemEventQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}