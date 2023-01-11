package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExamplesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeDuplicates")
    public GetExamplesIncludeDuplicatesEnum includeDuplicates;
    public GetExamplesQueryParams withIncludeDuplicates(GetExamplesIncludeDuplicatesEnum includeDuplicates) {
        this.includeDuplicates = includeDuplicates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetExamplesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetExamplesQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=useCanonical")
    public GetExamplesUseCanonicalEnum useCanonical;
    public GetExamplesQueryParams withUseCanonical(GetExamplesUseCanonicalEnum useCanonical) {
        this.useCanonical = useCanonical;
        return this;
    }
}