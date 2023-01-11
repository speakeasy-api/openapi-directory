package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetQueryEmailTemplatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventTypeName")
    public String eventTypeName;
    public GetQueryEmailTemplatesQueryParams withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetQueryEmailTemplatesQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetQueryEmailTemplatesQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Integer start;
    public GetQueryEmailTemplatesQueryParams withStart(Integer start) {
        this.start = start;
        return this;
    }
}