package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAudioQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetAudioQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetAudioUseCanonicalEnum useCanonical;
    public GetAudioQueryParams withUseCanonical(GetAudioUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
}