package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSecurityGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetSecurityGroupQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}