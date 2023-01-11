package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordListsForLoggedInUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetWordListsForLoggedInUserQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetWordListsForLoggedInUserQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
}