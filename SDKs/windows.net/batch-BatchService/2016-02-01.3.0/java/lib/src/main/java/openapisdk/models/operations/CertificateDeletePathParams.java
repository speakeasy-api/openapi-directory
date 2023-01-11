package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CertificateDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thumbprint")
    public String thumbprint;
    public CertificateDeletePathParams withThumbprint(String thumbprint) {
        this.thumbprint = thumbprint;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=thumbprintAlgorithm")
    public String thumbprintAlgorithm;
    public CertificateDeletePathParams withThumbprintAlgorithm(String thumbprintAlgorithm) {
        this.thumbprintAlgorithm = thumbprintAlgorithm;
        return this;
    }
}