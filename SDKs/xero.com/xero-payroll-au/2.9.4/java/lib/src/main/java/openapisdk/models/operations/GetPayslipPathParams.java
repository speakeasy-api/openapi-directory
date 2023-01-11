package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPayslipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayslipID")
    public String payslipID;
    public GetPayslipPathParams withPayslipId(String payslipID) {
        this.payslipID = payslipID;
        return this;
    }
}