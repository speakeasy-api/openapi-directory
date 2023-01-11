package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTopExampleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetTopExampleUseCanonicalEnum useCanonical;
    public GetTopExampleQueryParams withUseCanonical(GetTopExampleUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
}