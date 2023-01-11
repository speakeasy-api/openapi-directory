import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IdentifierTypeEnum {
    Nie = "NIE",
    Dni = "DNI",
    Ein = "EIN",
    Bn = "BN",
    Aadhar = "AADHAR",
    Nin = "NIN",
    Nric = "NRIC"
}
export declare class Identifier extends SpeakeasyBase {
    type?: IdentifierTypeEnum;
    value?: string;
}
