package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIpSetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetIpSetQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}