package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class JobGetAllJobsLifetimeStatisticsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api-version")
    public String apiVersion;
    public JobGetAllJobsLifetimeStatisticsQueryParams withApiVersion(String apiVersion) {
        this.apiVersion = apiVersion;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timeout")
    public Integer timeout;
    public JobGetAllJobsLifetimeStatisticsQueryParams withTimeout(Integer timeout) {
        this.timeout = timeout;
        return this;
    }
}