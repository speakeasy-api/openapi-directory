package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UserApiPostReportPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UserApiPostReportPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}