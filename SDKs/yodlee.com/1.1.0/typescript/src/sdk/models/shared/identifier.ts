import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum IdentifierTypeEnum {
    Nie = "NIE",
    Dni = "DNI",
    Ein = "EIN",
    Bn = "BN",
    Aadhar = "AADHAR",
    Nin = "NIN",
    Nric = "NRIC"
}


export class Identifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: IdentifierTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
