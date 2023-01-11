package openapisdk.models.shared;


public enum LeaveLineCalculationTypeEnum {
    NOCALCULATIONREQUIRED("NOCALCULATIONREQUIRED"),
    FIXEDAMOUNTEACHPERIOD("FIXEDAMOUNTEACHPERIOD"),
    ENTERRATEINPAYTEMPLATE("ENTERRATEINPAYTEMPLATE"),
    BASEDONORDINARYEARNINGS("BASEDONORDINARYEARNINGS"),
    UNKNOWN("");

    public final String value;

    private LeaveLineCalculationTypeEnum(String value) {
        this.value = value;
    }
}
