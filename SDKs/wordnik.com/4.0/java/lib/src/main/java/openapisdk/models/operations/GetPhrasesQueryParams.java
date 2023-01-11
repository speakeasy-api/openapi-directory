package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhrasesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetPhrasesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetPhrasesUseCanonicalEnum useCanonical;
    public GetPhrasesQueryParams withUseCanonical(GetPhrasesUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=wlmi")
    public Integer wlmi;
    public GetPhrasesQueryParams withWlmi(Integer wlmi) {
        this.wlmi = wlmi;
        return this;
    }
}