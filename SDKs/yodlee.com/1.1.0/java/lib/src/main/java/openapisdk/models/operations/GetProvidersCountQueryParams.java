package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProvidersCountQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=capability")
    public String capability;
    public GetProvidersCountQueryParams withCapability(String capability) {
        this.capability = capability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dataset$filter")
    public String datasetDollarFilter;
    public GetProvidersCountQueryParams withDatasetDollarFilter(String datasetDollarFilter) {
        this.datasetDollarFilter = datasetDollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fullAccountNumberFields")
    public String fullAccountNumberFields;
    public GetProvidersCountQueryParams withFullAccountNumberFields(String fullAccountNumberFields) {
        this.fullAccountNumberFields = fullAccountNumberFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetProvidersCountQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=priority")
    public String priority;
    public GetProvidersCountQueryParams withPriority(String priority) {
        this.priority = priority;
        return this;
    }
}