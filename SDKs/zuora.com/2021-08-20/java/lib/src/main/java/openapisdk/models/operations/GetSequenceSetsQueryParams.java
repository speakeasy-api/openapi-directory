package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSequenceSetsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetSequenceSetsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetSequenceSetsQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetSequenceSetsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
}