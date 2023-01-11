package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllProvidersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=capability")
    public String capability;
    public GetAllProvidersQueryParams withCapability(String capability) {
        this.capability = capability;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dataset$filter")
    public String datasetDollarFilter;
    public GetAllProvidersQueryParams withDatasetDollarFilter(String datasetDollarFilter) {
        this.datasetDollarFilter = datasetDollarFilter;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fullAccountNumberFields")
    public String fullAccountNumberFields;
    public GetAllProvidersQueryParams withFullAccountNumberFields(String fullAccountNumberFields) {
        this.fullAccountNumberFields = fullAccountNumberFields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=institutionId")
    public Long institutionId;
    public GetAllProvidersQueryParams withInstitutionId(Long institutionId) {
        this.institutionId = institutionId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetAllProvidersQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=priority")
    public String priority;
    public GetAllProvidersQueryParams withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=providerId")
    public String providerId;
    public GetAllProvidersQueryParams withProviderId(String providerId) {
        this.providerId = providerId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Integer skip;
    public GetAllProvidersQueryParams withSkip(Integer skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=top")
    public Integer top;
    public GetAllProvidersQueryParams withTop(Integer top) {
        this.top = top;
        return this;
    }
}