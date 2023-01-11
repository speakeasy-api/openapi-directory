package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComputeNodeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodeId")
    public String nodeId;
    public ComputeNodeGetPathParams withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=poolId")
    public String poolId;
    public ComputeNodeGetPathParams withPoolId(String poolId) {
        this.poolId = poolId;
        return this;
    }
}