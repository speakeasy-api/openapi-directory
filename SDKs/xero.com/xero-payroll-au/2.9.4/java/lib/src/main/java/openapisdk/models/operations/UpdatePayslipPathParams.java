package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePayslipPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PayslipID")
    public String payslipID;
    public UpdatePayslipPathParams withPayslipId(String payslipID) {
        this.payslipID = payslipID;
        return this;
    }
}