package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventTriggersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=active")
    public String active;
    public GetEventTriggersQueryParams withActive(String active) {
        this.active = active;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=baseObject")
    public String baseObject;
    public GetEventTriggersQueryParams withBaseObject(String baseObject) {
        this.baseObject = baseObject;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=eventTypeName")
    public String eventTypeName;
    public GetEventTriggersQueryParams withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetEventTriggersQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start")
    public Long start;
    public GetEventTriggersQueryParams withStart(Long start) {
        this.start = start;
        return this;
    }
}