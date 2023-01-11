package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllInvestorsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public String pageNumber;
    public GetAllInvestorsQueryParams withPageNumber(String pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public String pageSize;
    public GetAllInvestorsQueryParams withPageSize(String pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetAllInvestorsSortEnum sort;
    public GetAllInvestorsQueryParams withSort(GetAllInvestorsSortEnum sort) {
        this.sort = sort;
        return this;
    }
}