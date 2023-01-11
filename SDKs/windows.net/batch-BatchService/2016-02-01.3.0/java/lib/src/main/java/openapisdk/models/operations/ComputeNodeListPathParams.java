package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public ComputeNodeListPathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}