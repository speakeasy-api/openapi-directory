package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVnicQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetVnicQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}