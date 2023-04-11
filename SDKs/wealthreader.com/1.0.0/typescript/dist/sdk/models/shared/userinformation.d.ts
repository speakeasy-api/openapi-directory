import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserInformationGenderEnum {
    Male = "male",
    Female = "female"
}
export declare enum UserInformationMaritalStatusEnum {
    Single = "single",
    Married = "married"
}
/**
 * Información relativa a la persona que hace login
 */
export declare class UserInformation extends SpeakeasyBase {
    id: string;
    address?: string;
    birthDate?: Date;
    birthPlace?: string;
    /**
     * Número de teléfono con el prefijo internacional, sin espacios
     */
    cellPhone?: string;
    city?: string;
    country?: string;
    email?: string;
    gender?: UserInformationGenderEnum;
    /**
     * El valor aquí es muy variable de una entidad a otra: de indicar solamente si es cuenta propia o cuenta ajena a indicar el tipo de profesión
     */
    job?: string;
    maritalStatus?: UserInformationMaritalStatusEnum;
    name: string;
    postalCode?: string;
}
