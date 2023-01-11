package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DashboardWebinarDetailQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public DashboardWebinarDetailTypeEnum type;
    public DashboardWebinarDetailQueryParams withType(DashboardWebinarDetailTypeEnum type) {
        this.type = type;
        return this;
    }
}