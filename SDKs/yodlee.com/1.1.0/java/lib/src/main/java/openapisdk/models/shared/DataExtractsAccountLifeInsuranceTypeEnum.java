package openapisdk.models.shared;


public enum DataExtractsAccountLifeInsuranceTypeEnum {
    OTHER("OTHER"),
    TERM_LIFE_INSURANCE("TERM_LIFE_INSURANCE"),
    UNIVERSAL_LIFE_INSURANCE("UNIVERSAL_LIFE_INSURANCE"),
    WHOLE_LIFE_INSURANCE("WHOLE_LIFE_INSURANCE"),
    VARIABLE_LIFE_INSURANCE("VARIABLE_LIFE_INSURANCE"),
    ULIP("ULIP"),
    ENDOWMENT("ENDOWMENT");

    public final String value;

    private DataExtractsAccountLifeInsuranceTypeEnum(String value) {
        this.value = value;
    }
}
