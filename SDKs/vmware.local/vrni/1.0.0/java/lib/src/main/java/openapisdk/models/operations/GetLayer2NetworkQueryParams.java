package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLayer2NetworkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time")
    public Long time;
    public GetLayer2NetworkQueryParams withTime(Long time) {
        this.time = time;
        return this;
    }
}