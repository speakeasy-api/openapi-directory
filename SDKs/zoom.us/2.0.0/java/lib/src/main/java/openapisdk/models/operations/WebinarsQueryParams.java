package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebinarsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_number")
    public Long pageNumber;
    public WebinarsQueryParams withPageNumber(Long pageNumber) {
        this.pageNumber = pageNumber;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public WebinarsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}