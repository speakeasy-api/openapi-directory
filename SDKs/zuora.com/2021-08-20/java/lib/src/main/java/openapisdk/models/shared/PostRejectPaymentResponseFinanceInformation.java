package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostRejectPaymentResponseFinanceInformation
 * Container for the finance information related to the refund.
 * 
**/
public class PostRejectPaymentResponseFinanceInformation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankAccountAccountingCode")
    public String bankAccountAccountingCode;
    public PostRejectPaymentResponseFinanceInformation withBankAccountAccountingCode(String bankAccountAccountingCode) {
        this.bankAccountAccountingCode = bankAccountAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankAccountAccountingCodeType")
    public String bankAccountAccountingCodeType;
    public PostRejectPaymentResponseFinanceInformation withBankAccountAccountingCodeType(String bankAccountAccountingCodeType) {
        this.bankAccountAccountingCodeType = bankAccountAccountingCodeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transferredToAccounting")
    public PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum transferredToAccounting;
    public PostRejectPaymentResponseFinanceInformation withTransferredToAccounting(PostRejectPaymentResponseFinanceInformationTransferredToAccountingEnum transferredToAccounting) {
        this.transferredToAccounting = transferredToAccounting;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedPaymentAccountingCode")
    public String unappliedPaymentAccountingCode;
    public PostRejectPaymentResponseFinanceInformation withUnappliedPaymentAccountingCode(String unappliedPaymentAccountingCode) {
        this.unappliedPaymentAccountingCode = unappliedPaymentAccountingCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unappliedPaymentAccountingCodeType")
    public String unappliedPaymentAccountingCodeType;
    public PostRejectPaymentResponseFinanceInformation withUnappliedPaymentAccountingCodeType(String unappliedPaymentAccountingCodeType) {
        this.unappliedPaymentAccountingCodeType = unappliedPaymentAccountingCodeType;
        return this;
    }
}