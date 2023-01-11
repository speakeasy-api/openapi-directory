package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetFilesQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pagesize")
    public Long pagesize;
    public GetFilesQueryParams withPagesize(Long pagesize) {
        this.pagesize = pagesize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public GetFilesSortEnum sort;
    public GetFilesQueryParams withSort(GetFilesSortEnum sort) {
        this.sort = sort;
        return this;
    }
}