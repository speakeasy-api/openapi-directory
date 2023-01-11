package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDataQueryJobsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pageSize")
    public Long pageSize;
    public GetDataQueryJobsQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=queryStatus")
    public openapisdk.models.shared.GlobalHeaderZuoraTrackIdEnum queryStatus;
    public GetDataQueryJobsQueryParams withQueryStatus(openapisdk.models.shared.GlobalHeaderZuoraTrackIdEnum queryStatus) {
        this.queryStatus = queryStatus;
        return this;
    }
}