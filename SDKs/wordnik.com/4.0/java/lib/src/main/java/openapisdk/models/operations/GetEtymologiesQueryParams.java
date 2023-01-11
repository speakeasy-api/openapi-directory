package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEtymologiesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetEtymologiesUseCanonicalEnum useCanonical;
    public GetEtymologiesQueryParams withUseCanonical(GetEtymologiesUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
}