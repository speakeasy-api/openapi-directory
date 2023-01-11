package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PoolResizePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public PoolResizePathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}