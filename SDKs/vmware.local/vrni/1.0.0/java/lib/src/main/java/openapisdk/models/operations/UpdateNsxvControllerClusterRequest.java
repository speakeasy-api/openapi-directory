package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNsxvControllerClusterRequest {
    public UpdateNsxvControllerClusterPathParams pathParams;
    public UpdateNsxvControllerClusterRequest withPathParams(UpdateNsxvControllerClusterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.NsxControllerDataCollection request;
    public UpdateNsxvControllerClusterRequest withRequest(openapisdk.models.shared.NsxControllerDataCollection request) {
        this.request = request;
        return this;
    }
    public UpdateNsxvControllerClusterSecurity security;
    public UpdateNsxvControllerClusterRequest withSecurity(UpdateNsxvControllerClusterSecurity security) {
        this.security = security;
        return this;
    }
}