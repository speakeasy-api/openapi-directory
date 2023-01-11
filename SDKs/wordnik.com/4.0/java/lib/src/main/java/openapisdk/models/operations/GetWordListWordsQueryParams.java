package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordListWordsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetWordListWordsQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetWordListWordsQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortBy")
    public GetWordListWordsSortByEnum sortBy;
    public GetWordListWordsQueryParams withSortBy(GetWordListWordsSortByEnum sortBy) {
        this.sortBy = sortBy;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sortOrder")
    public String sortOrder;
    public GetWordListWordsQueryParams withSortOrder(String sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
}