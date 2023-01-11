package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNsxManagerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetNsxManagerQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}