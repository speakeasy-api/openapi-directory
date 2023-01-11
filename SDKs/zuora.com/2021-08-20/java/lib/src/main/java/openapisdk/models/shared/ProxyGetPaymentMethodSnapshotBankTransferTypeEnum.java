package openapisdk.models.shared;


public enum ProxyGetPaymentMethodSnapshotBankTransferTypeEnum {
    AUTOMATISCH_INCASSO("AutomatischIncasso"),
    LASTSCHRIFT_DE("LastschriftDE"),
    LASTSCHRIFT_AT("LastschriftAT"),
    DEMANDE_DE_PRELEVEMENT("DemandeDePrelevement"),
    DIRECT_DEBIT_UK("DirectDebitUK"),
    DOMICIL("Domicil"),
    LASTSCHRIFT_CH("LastschriftCH"),
    RID("RID"),
    ORDEN_DE_DOMICILIACION("OrdenDeDomiciliacion"),
    AUTOGIRO("Autogiro"),
    BETALINGSSERVICE("Betalingsservice");

    public final String value;

    private ProxyGetPaymentMethodSnapshotBankTransferTypeEnum(String value) {
        this.value = value;
    }
}
